angular
  .module('twitterFace')
  .config(function($routeProvider){
    $routeProvider
      .when('/login', {
        templateUrl: '/assets/auth/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'auth'
      })
      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl',
        controllerAs: 'auth'
      })
  });
