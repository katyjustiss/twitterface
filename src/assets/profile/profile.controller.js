angular
  .module('twitterFace')
  .controller('ProfileCtrl', function ($rootScope, Profile, API_URL) {
    var main = this;

    Profile.getFriends($rootScope.auth.uid, function(res){
      main.friendObj = res;
      console.log(res);

      Profile.getAll(function(people){
      console.log(people);

      for(var onePerson in people){
        debugger;
        for (var friend in main.friendObj){
          if(main.friendObj[friend] === onePerson){
            main.pictures = people[onePerson];
          }else{
            main.people = people[onePerson];
          }
        }
      }
    });

    })



})
