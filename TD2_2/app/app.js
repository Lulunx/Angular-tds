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
    this.tmpcontact={
        "firstname": "",
        "lastname": "",
        "mail": ""
    };
    this.supression=0;
    this.operation="Ajouter";
    this.visible=0;

    this.toAdd=function(){
      self.visible=1;
      self.operation="Ajouter";
      self.tmpcontact.firstname="";
      self.tmpcontact.lastname="";
      self.tmpcontact.mail="";
    };

    this.toUpdate=function(contact){
        self.contact=contact;
        self.visible=1;
        self.operation="Modifier";
        self.tmpcontact.firstname=contact.firstname;
        self.tmpcontact.lastname=contact.lastname;
        self.tmpcontact.mail=contact.mail;
    };

    this.add=function(){
        self.visible=0;
        if(self.operation=="Modifier")
            self.update();
        else{
            self.contacts.push(angular.copy(self.tmpcontact));
        }

    };

    this.update=function(){
        self.contact.firstname=angular.copy(self.tmpcontact.firstname);
        self.contact.lastname=angular.copy(self.tmpcontact.lastname);
        self.contact.mail=angular.copy(self.tmpcontact.mail);
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
