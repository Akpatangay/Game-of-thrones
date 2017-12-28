app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl:  'views/home.html',
            controller:   'mainController',
            controllerAs: 'mainCtrl'
        })
        .when('/:key/:value', {
            templateUrl:  'views/details.html',
            controller:   'detailsController',
            controllerAs: 'details'
        })
        .otherwise({
            //redirectTo:'/'
            template: '<h1>404 page not found</h1>'
        });
}]);