angular
  .module('twitterFace')
  .controller('AuthCtrl', function ($rootScope, $scope, $location, API_URL) {
    var main = this;

    main.onModalLoad = function(){
      $('#modal').modal('show');
      $('#modal').on('hidden.bs.modal', function (e) {
        $location.path('/login');
        $scope.$apply();
      });
    }

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
          $location.path('/');
          $scope.$apply();
        }
      });
    };
  });