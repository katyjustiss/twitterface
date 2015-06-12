angular
  .module('twitterFace')
  .controller('ProfileCtrl', function ($rootScope, Profile, API_URL) {
    var main = this;

    Profile.getAll(function(people){
      main.people = people;
    })

    // ===========TRYING TO FADE OUT FRIENDS FROM ALL FRIENDS============
    // main.pictures = [];
    // main.people = [];
    // Profile.getFriends($rootScope.auth.uid, function(res){
    //   main.friendObj = res;
    //   console.log(res);

    //   Profile.getAll(function(people){
    //   console.log(people);

    //   for(var onePerson in people){
    //     debugger;
    //     for (var friend in main.friendObj){
    //       if(main.friendObj[friend] === onePerson){
    //         main.pictures.push(people[onePerson]);
    //       }else if(main.friendObj[friend] !== onePerson && main.people.indexOf(people[onePerson]) === -1 && main.pictures.indexOf(people[onePerson]) === -1){
    //         main.people.push(people[onePerson]);
    //       }
    //     }
    //   }
    // });

    // })



})
