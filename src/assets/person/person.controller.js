angular
  .module('twitterFace')
  .controller('PersonCtrl', function(Profile, $routeParams, API_URL){
    var main = this;
    main.id = $routeParams.id;
    var fb = new Firebase(API_URL);

    Profile.getOne(main.id, function(data){
      main.person = data;
    });

    var userData = fb.getAuth();

    main.friendMe = function(){
      debugger;
      Profile.addFriend(userData.uid , main.id, function(res){
        console.log(res);
      });
    }

  })
