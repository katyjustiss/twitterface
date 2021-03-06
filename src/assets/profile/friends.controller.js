angular
  .module('twitterFace')
  .controller('FriendsCtrl', function(API_URL, Profile) {
    var main = this;
    var fb = new Firebase(API_URL);
    var userData = fb.getAuth();
    main.friendProfile = [];

    Profile.getFriends(userData.uid, function(res) {
      main.friendObj = res;
      for (var friend in main.friendObj) {
        Profile.getOne(main.friendObj[friend], function(arg) {
          main.friendProfile.push(arg);
        })
      }
    })
  })
