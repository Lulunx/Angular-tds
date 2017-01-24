'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('noteApp', []);
app.controller("NoteController", function(){
    this.messageNote="";
    this.info="";

    this.save = function(message) {
        this.messageNote = message;
    };

    this.clear = function() {
        this.messageNote = "";
    };

    this.count = function(){
      return 100-messageNote.length();
    };
});