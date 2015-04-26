app.controller('SearchPage', ['$scope', '$rootScope', '$element', function($scope, $rootScope, $element){
  
  /**
   *
   * @name Pesquisa
   * @description query de pesquisa
   * @type Object
   *
   */
  $scope.search = {
    q: ''
  };

  /**
   *
   * @name Resultados
   * @description Resultados de Pesquisa
   * @type Object
   *
   */
  $scope.results = {
    data: []
  };

  /**
   *
   * @name Preloader
   * @description Resultados de Pesquisa
   * @type boolean
   *
   */
  $scope.preloader = false;

  /**
   *
   * @name Abre Página
   * @description Abre Página de pesquisa
   * @return void
   *
   */
  $scope.open = function(){
    angular.element('body').addClass('mode-search');
    $element.find('.search-box').fadeIn().find('input').focus();
  };

  /**
   *
   * @name Pesquisa ao Vivo
   * @description Faz a pesquisa para cada letra digitada
   * @return void
   *
   */
  $scope.liveSearch = function(){
    if($scope.search.q.length === 0){
      return;
    }

    $scope._search($scope.search.q);
  };

  /**
   *
   * @name Pesquisa
   * @description Faz a requisição da pesquisa
   * @return void
   *
   */
  $scope._search = function(query){
    $scope.preloader = true;
    
    $.get('/media/search.json', {q: query}, function(response){
      $scope.setResult(response);

      $scope.preloader = false;
    }, 'json');
  };

  /**
   *
   * @name Carrega Imagem
   * @description Carrega a imagem da midia
   * @param Object
   * @return String
   *
   */
  $scope.loadImage = function(media){
    if(media.information){
      return media.information.image['img_320x180'];
    }

    if(media.kind === 'song'){
      return '/assets/no-image-music.png';
    }

    return '/assets/no-image.png';
  };

  /**
   *
   * @name Seta Resposta
   * @description Seta Resposta da Requisição
   * @return void
   *
   */
  $scope.setResult = function(results){
    $scope.results.data = results;

    $scope.$apply();
  };

  /**
   *
   * @name Fechar
   * @description Fecha página de busca
   * @return void
   *
   */
  $scope.close = function(){
    angular.element('body').removeClass('mode-search');
    $element.find('.search-box').fadeOut();
    
    $scope.search.q = '';
    $scope.results  = {};
  };

  //Add Event Listeners
  (function(){
    $rootScope.$on('open page search', $scope.open);
    $rootScope.$on('close page search', $scope.close);
    
    $scope.$watch('search.q', $scope.liveSearch);
  }());
}])