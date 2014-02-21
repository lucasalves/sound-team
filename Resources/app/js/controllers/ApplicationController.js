app.controller("ApplicationController", function($scope){
    $scope.isDashboard = function(){
        return location.pathname === '/index.html';
    };
});