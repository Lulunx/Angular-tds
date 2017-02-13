'use strict';

// Declare app level module which depends on views, and components
var noteApp=angular.module('noteApp', ['ngCookies']);
noteApp.controller("NoteController",["$cookies",function($cookies){
    this.messageNote=$cookies.get('cookieee')||"";
    this.info="";
    var self=this;
    this.compte=100;

    this.save = function() {
        $cookies.put('cookieee', this.messageNote);
        this.info="Note sauvegardée"
    };

    this.clear = function() {
        this.messageNote = "";
        this.count();
        this.info="";
    };

    this.affich=function(){
        if(this.info=="Note sauvegardée")
            return "alert-success";
        else{
            if(this.compte>50)
                return "alert-success";
            else if(this.compte>20)
                return "alert-warning";
            else
                return "alert-danger";
        }
    }

    this.infos=function(){
        return this.info
    }

    this.count = function(){
        this.info = "Note Modifiée";
       this.compte=100-self.messageNote.length;
    };
}]);