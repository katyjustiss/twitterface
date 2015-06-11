angular
  .module('twitterFace')
  .controller('ProfileCtrl', function ($rootScope, $scope, $location, Profile) {
    var main = this;

    Profile.getAll(function(person){
      console.log(person)
      main.person = person;
  });
})
