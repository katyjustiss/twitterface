angular
  .module('twitterFace')
  .factory('Profile', function($http, API_URL) {
    return {
      create(data, cb) {
        $http
            .put(`${API_URL}/profile.json`, data)
            .success(cb);
      }
    }
  });
