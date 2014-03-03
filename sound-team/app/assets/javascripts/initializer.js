var app = angular.module('soundTeam', []);
    app.run(function($http, $rootScope){
        var url = location.origin + '/init-data.json';
        
        $http.get(url)
             .success(function(data){
                $rootScope.$emit('init data', data);
                $rootScope.$broadcast('init data', data);
             });
    });