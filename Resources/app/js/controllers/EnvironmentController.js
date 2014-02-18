app.controller('EnvironmentController', function($scope){
    var windowConfig = {
            id: "test-runner",
            title: "Test Runner",
            url: "app://test/SpecRunner.html"
    };

    $scope.runTest = function(){
        environment.setEnv('test');

        $scope.windowRunnerTest = Ti.UI.createWindow(windowConfig);
        $scope.windowRunnerTest.open();
        $scope.windowRunnerTest.setTopMost(true);

        this.addEventListener();
    };

    $scope.addEventListener = function(){
        $scope.windowRunnerTest.addEventListener('closed', function(){
            Database.purge();
            environment.setEnv( environment.getPrevEnv() );
            
            $scope.$apply();
        });
    };

    $scope.isEnvironmentDevelopment = function(){
        return environment.ENV === 'development';
    };
});