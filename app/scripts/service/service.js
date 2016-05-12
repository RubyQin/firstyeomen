angular
  .module('nodewithangularApp').service('login', function() {
    this.loginRest = function (username, password) {
      if (username === 'yizhu' && password === '1234') {
        return true;
      } else {
        return false;
      }
    };
  });
