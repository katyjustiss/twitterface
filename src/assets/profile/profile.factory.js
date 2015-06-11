angular
  .module('twitterFace')
  .factory('Profile', function($http, API_URL) {
    return {
      create(data, uid, cb) {
        $http
          .put(`${API_URL}/profile/${uid}.json`, data)
          .success(cb);
      },
      getAll(cb) {
        $http
          .get(`${API_URL}/profile.json`)
          .success(cb);
      }
    }
  });
