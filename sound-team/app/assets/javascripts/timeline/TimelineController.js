app.controller('TimelineController', ['$scope', '$http', function($scope, $http){
  $scope.items     = [];
  $scope.timelines = [];

  $scope.played = [];

  $scope.selectedTimeline;

  $scope.load = function(){
    $scope.getTimelinesOptions();
  };

  $scope.getTimelinesOptions = function(){
    $http.get('/timeline.json')
          .success(function(data){
            $scope.timelines = data;

            if(data.length === 1){
              $scope.selectedTimeline = $scope.timelines[0].id;
              $scope.changeTimeline();
            }
          });
  };

  $scope.changeTimeline = function(selected){
    $scope.getItemsTimeline();
  };

  $scope.play = function(item){
    item.status = 'playing';
    $scope.$broadcast('play now', item);
    // $scope.$emit('play now', item);
  };

  $scope.getItemsTimeline = function(){
    $http.get('/timeline/' + $scope.selectedTimeline + '/items.json')
          .success(function(data){
            $scope.items = data;

            angular.forEach(data, function(value){
              $scope.items.push(value);
            });
          });
  };

  $scope.image = function(item){
    if(item.information && item.information.image){
      return item.information.image.img_320x180.replace(/public/, '');
    }
    return false;
  };

  $scope.load();
}]);