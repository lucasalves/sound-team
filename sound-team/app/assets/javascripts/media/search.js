app.controller('MediaSearch', ['$scope', '$element', '$rootScope', function($scope, $element, $rootScope){

  /**
   *
   * @name Abre Página
   * @description Abre Página de pesquisa
   * @return void
   *
   */
  $scope.openPage = function(){
    $rootScope.$emit('open page search');
    // angular.element('.search-box').fadeIn().find('input').focus();
  };

  /**
   *
   * @name Fechar
   * @description Fecha página de busca
   * @return void
   *
   */
  $scope.close = function(){
    $rootScope.$emit('close page search');
  };

  //Add Event Listeners
  (function(){
    $element.find('.custom-search-form input').on('focus', $.proxy($scope, 'openPage'));
  }());
}]);