angular
  .module('twitterFace')
  .controller('ProfileCtrl', function ($rootScope, Profile, API_URL) {
    var main = this;

    Profile.getAll(function(people){
      //gets all users and gives to ng-repeat
      main.people = people;
      //creates an array that ng-repeat uses to check who I'm friends with
      Profile.getFriends($rootScope.auth.uid, function(res){
        main.friendObj = res;
        main.friendArr = [];
        for (var friend in main.friendObj){
          main.friendArr.push(main.friendObj[friend]);
        }
      })
    })

})
