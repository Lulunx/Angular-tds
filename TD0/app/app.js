'use strict';

// Declare app level module which depends on views, and components
var noteApp=angular.module('noteApp', []);
noteApp.controller("NoteController", function(){
    this.messageNote="";
    this.info="";
    var self=this;

    this.save = function() {
        this.messageNote = "qqchose ?";
    };

    this.clear = function() {
        this.messageNote = "";
    };

    this.count = function(){
      return 100-self.messageNote.length;
    };
});