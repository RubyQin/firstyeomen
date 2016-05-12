'use strict';

/**
 * @ngdoc overview
 * @name nodewithangularApp
 * @description
 * # nodewithangularApp
 *
 * Main module of the application.
 */
angular
  .module('nodewithangularApp', [
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/head/login');
    $stateProvider
      .state('head',{
        url:'/head',
        templateUrl:'views/head.html'
      }).state('head.login',{
        url:'/login',
        templateUrl:'views/login.html'
      }).state('head.detail',{
        url:'/detail',
        templateUrl:'views/detail.html'
      });

  });
