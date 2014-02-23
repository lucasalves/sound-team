var app = angular.module('soundTeam', ['ngRoute']);


(function(){
    if(!Ti.UI.getMainWindow().isMaximized()){
        Ti.UI.getMainWindow().maximize();
    }
}());