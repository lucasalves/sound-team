var app = angular.module('soundTeam', [])

    .run(function($http, $rootScope){
        var url = location.origin + '/init-data.json';
        
        $http.get(url).success(function(data){
                $rootScope.$broadcast('init data', data);
             });
    });