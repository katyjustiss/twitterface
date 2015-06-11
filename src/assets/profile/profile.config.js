angular
  .module('twitterFace')
  .config(function($routeProvider){
    $routeProvider
      .when('/newfriends', {
        templateUrl: '/assets/profile/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
    })
