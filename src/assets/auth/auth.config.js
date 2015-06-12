angular
  .module('twitterFace')
  .config(function($routeProvider){
    $routeProvider
      .when('/login', {
        templateUrl: '/assets/auth/login.html',
        controller: 'AuthCtrl',
        controllerAs: 'auth',
        resolve: {
          checkLogin: function ($rootScope, $location) {
            if ($rootScope.auth) {
              $location.path('/newFriends')
            }
          }
        }
      })
      .when('/logout', {
        template: '<h1>Logging out...</h1>',
        controller: 'LogoutCtrl',
        controllerAs: 'auth'
      })
      .when('/', {
      templateUrl: '/assets/profile/profile.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
      })
  });
