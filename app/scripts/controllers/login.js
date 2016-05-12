(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name nodewithangularApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the nodewithangularApp
   */
  angular
    .module('nodewithangularApp')
    .controller('loginCtrl', loginCtrl);

  function loginCtrl($scope, login, $location, callDataService){
    $scope.login = {user: '', password: ''};

    $scope.showDetail = function(){
      console.log($scope.login.user+$scope.login.password);
      if(login.loginRest($scope.login.user, $scope.login.password)){
        $location.path('/head/detail');
        var promise = new Promise(function(resolve, reject){
          callDataService.getData(resolve, reject);
        });

        promise.then(function(val){
          $scope.data = val.data;
          $scope.$digest();
        }).catch(function(){

        });
      }else{
        alert('invalid username or password');
      }
    }

    $scope.showResult = false;
    $scope.analysis = function(){
      $scope.showResult = true;
      $scope.totalhours = $scope.data.calender.length * 24;
      $scope.workinghours = 0;
        for(var i=0; i<$scope.data.calender.length; i++) {
          $scope.workinghours += $scope.data.calender[i].hour;
        }
      $scope.perweek = $scope.workinghours/($scope.data.calender.length/7);
      $scope.green = false;
        if($scope.perweek <80){
          $scope.green = true;

        }
      $scope.red = false;
      if($scope.perweek >=80){
        $scope.red = true;
      }
    }

  }

})();
