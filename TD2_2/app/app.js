'use strict';

// Declare app level module which depends on views, and components
var ContactApp=angular.module('ContactApp',[]);
ContactApp.controller("ContactController",['filterFilter', function FilterController(filterFilter){
    var self=this;
    this.contacts=[
        {
            "firstname": "Mark",
            "lastname": "ZUCKERBERG",
            "mail": "mark@facebook.com"
        },
        {
            "firstname": "Bill",
            "lastname": "GATES",
            "mail": "bill@microsoft.com"
        },
        {
            "firstname": "Steeve",
            "lastname": "JOBS",
            "mail": "steeve@apple.com"
        }];


    this.contact=[];
    this.tmpContact=[];
    this.supression=0;
    this.operation="Ajouter";
    this.visible=0;

    this.toAdd=function(contact){
      self.visible=1;
      self.operation="Ajouter";
    };

    this.toUpdate=function(){
        self.visible=1;
        self.operation="Modifier";
    };

    this.add=function(){

    };

    this.update=function(){

    };

    this.delete=function(contact){
        contact.deleted=true;
        self.supression=1;
    };

    this.annulersuppressions=function(){
        for(var i=0;i<self.contacts.length;i++){
            self.contacts[i].deleted="";
        }
        self.supression=0;
    };
}]);

ContactApp.filter('filtring',function(){
   return function(items){
       var result=[];
       for(var i=0;i<items.length;i++){
           if(!items[i].deleted)
               result.push(items[i]);
       }
       return result;
   };
});
