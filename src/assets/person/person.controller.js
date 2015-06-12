angular
  .module('twitterFace')
  .controller('PersonCtrl', function($scope, Profile, $routeParams, API_URL, $location){
    var main = this;
    main.id = $routeParams.id;
    var fb = new Firebase(API_URL);

    Profile.getOne(main.id, function(data){
      main.person = data;
    });

    var userData = fb.getAuth();

    Profile.getFriends(userData.uid, function(res){
      main.friendObj = res;
      for (var friend in main.friendObj){
        if(main.friendObj[friend] === main.id){
          $('.btn').attr('disabled', 'disabled');
        }
      }
    })

    main.friendMe = function(){

      Profile.addFriend(userData.uid , main.id, function(res){
        $location.path('/friends');
        // $scope.$apply();
      });
    }

  })
