angular
  .module('twitterFace')
  .config(function($routeProvider){
    $routeProvider
      .when('/newfriends', {
        templateUrl: '/assets/profile/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/people/:id', {
        templateUrl: '/assets/person/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'profile',
        private: true
      })
      .when('/friends', {
        templateUrl: '/assets/profile/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'profile',
        private: true
      })
    })
