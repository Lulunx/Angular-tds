'use strict';

// Declare app level module which depends on views, and components
var CurrencyApp=angular.module('CurrencyApp',[]);
CurrencyApp.controller("CurrencyController",['$http', function($http){
    var self=this;
    this.to;
    this.currencies;
    this.from;
    this.what=1;
    this.result;
    this.histo=false;
    this.listeconversion=[];
    $http.get('data/currencymap.json').
    then(function(response) {
            self.currencies = response.data;
            self.from=self.currencies.EUR;
            self.to=self.currencies.USD;
        },
        function(response) {
            console.log("Erreur avec le statut Http : "+response.status);
        });

    this.swap=function(){
        this.inter=self.from;
        self.from=self.to;
        self.to=this.inter;
    };

    this.deleteHisto=function(histo){
        self.listeconversion.splice(self.listeconversion.indexOf(histo),1);
    };

    this.updateHisto=function(histo){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                var tx=response.data[histo.from.code+'_'+histo.to.code].val;
                histo.date=Date.now();
                histo.rate=tx;
                histo.amount=histo.what*histo.rate;
                histo.delta=histo.initialRate/histo.rate;
            });
    };

    this.getResult=function(){
        $http.jsonp('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from.code+'_'+self.to.code, {jsonpCallbackParam: 'callback'})
            .then(function(response) {
                var tx=response.data[self.from.code+'_'+self.to.code].val;
                self.result=tx*self.what;
                var y=false;
                for(var i=0;i<self.listeconversion.length;i++){
                    if(self.listeconversion[self.to+"_"+self.from]!=null){
                        y=true;
                        self.listeconversion.indexOf(i).initialAmout=self.what;
                        self.listeconversion.indexOf(i).amount=self.what;
                        self.listeconversion.indexOf(i).date=Date.now();
                        self.listeconversion.indexOf(i).rate=tx;
                        self.listeconversion.indexOf(i).initialRate=tx;
                    }
                }
                if(y==false){
                    var conv={from:self.from,to:self.to,amount:self.result,initialAmount:self.result,delta:1,rate:tx,what:self.what,date:Date.now(),update:false,initialRate:tx};
                    self.listeconversion[self.to+"_"+self.from]=conv;
                }
            });
    }
}]);

CurrencyApp.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    // We must whitelist the JSONP endpoint that we are using to show that we trust it
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://free.currencyconverterapi.com/**'
    ]);
}]);
