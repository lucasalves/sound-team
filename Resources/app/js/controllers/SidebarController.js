app.controller('SidebarController', function($scope) {
    var mainMenu;

    $scope.menuItems = [];

    $scope.init = function(){
        mainMenu = new Menu('main-menu')
        $scope.menuItems = mainMenu.getItems();

        if(!$scope.menuItems.length){
            $scope.addItems();
        }
    }

    $scope.addItems = function(){
        var items = [{
                       'name': "Vídeos",
                       'description': 'Visualize, busque e assista todos o vídeos disponíveis no sistema',
                       'icon': 'film',
                       'path': '/movie',
                       'component_id': 1
                    }];


        for (var i = 0; i < items.length; i++) {
            mainMenu.addItem(items[i]);
        }
        $scope.menuItems = mainMenu.getItems();
    };
});