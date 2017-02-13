'use strict';

// Declare app level module which depends on views, and components
var ServicesApp=angular.module('ServicesApp',[]);
ServicesApp.controller("ServicesController",function(){
    var self=this;
    this.services=[
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];

    this.total=function(){

    };

    this.toggleActive=function(service){
        service.active=!service.active;
    };
});
