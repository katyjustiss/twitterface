angular
  .module('twitterFace')
  .controller('PersonCtrl', function(Profile, $routeParams){
    var main = this;
    main.id = $routeParams.id;

    Profile.getOne(main.id, function(data){
      main.person = data;
    })

    // Profile.addFriend( , main.id)

  })
