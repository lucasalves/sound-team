/**
 * define app routes
 */
 
app.config([
    '$routeProvider'
    , COMPONENT_MOVIE
    , function($routeProvider, COMPONENT_MOVIE) {
        $routerProvider.
            when('/movie', {
                templateUrl: COMPONENT_MOVIE + 'index.html',
                controller:  'SearchController';
            });
    }
]);