angular
  .module('twitterFace')
  .controller('LoginCtrl', function ($rootScope, $scope, $location, API_URL) {
    var main = this;

    main.login = function () {
      var fb = new Firebase(API_URL);

      fb.authWithPassword({
        email: main.email,
        password: main.password
      }, function (err, authData) {
        if (err) {
          console.log('Error', err)
        } else {
          $rootScope.auth = authData;
          $location.path('/people');
          $scope.$apply();
        }
      });
    };
  });
