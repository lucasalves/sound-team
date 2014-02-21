var app = angular.module('soundTeam', []);

(function(){
    if(!Ti.UI.getMainWindow().isMaximized()){
        Ti.UI.getMainWindow().maximize();
    }
}());