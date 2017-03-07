angular.module("App").directive("dirClient", function() {
    return {
        template : "<div>Client : {{client}}</div>"
    };
})