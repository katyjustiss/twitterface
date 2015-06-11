angular
  .module('twitterFace')
  .controller('ProfileCtrl', function (Profile) {
    var main = this;

    Profile.getAll(function(person){
      console.log(person)
      main.person = person;
  });

})
