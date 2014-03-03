app.controller('SidebarController', ['$scope', function($scope){
    $scope.menuItems = [];

    $scope.$on('init data', function(e, data){
        $scope.menuItems = data.menu;
    });
}]);