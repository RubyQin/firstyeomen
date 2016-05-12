(function(){
  'use strict';

  angular
    .module('nodewithangularApp')
    .factory('callDataService',callDataService);

  function callDataService($http){
    var dataService = {getData:getData};
    return dataService;

    function getData(resolve,reject){
      $http({
        method:'GET',
        url:'http://localhost:8080/calender'
      }).then(function(data){
        resolve(data);
      },function(error){
        reject(error);
      })
    }
  }
})();
