angular
  .module('twitterFace')
  .controller('FriendsCtrl', function(API_URL, Profile) {
    var main = this;
    var fb = new Firebase(API_URL);
    var userData = fb.getAuth();

    Profile.getFriends(userData.uid, function(res) {
      console.log(res)
      main.friendObj = res;
    })

  })
