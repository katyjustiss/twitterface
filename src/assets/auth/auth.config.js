angular
  .module('twitterFace')
  .config(function($routeProvider){
    $routeProvider
      .when('/login', {
        templateUrl: '/assets/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth'
      })
  });
