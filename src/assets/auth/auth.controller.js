angular
  .module('twitterFace')
  .controller('AuthCtrl', function ($rootScope, $scope, $location, API_URL, Profile) {
    var main = this;
    var fb = new Firebase(API_URL);

    main.onModalLoad = function(){
      $('#modal').modal('show');
      $('#modal').on('hidden.bs.modal', function (e) {
        $location.path('/login');
        $scope.$apply();
      });
    }

    main.saveProfile = function() {
      var uid;
      fb.createUser({
        email: main.person.email,
        password: main.person.password
      }, function(err, userData){
        if(err){
          console.log('Firebase err:'+err);
        }else{
          console.log(userData.uid)
          Profile.create(main.person, userData.uid, function(res){
            console.log(res)
          })
        }
      });

    };

    main.login = function () {
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
