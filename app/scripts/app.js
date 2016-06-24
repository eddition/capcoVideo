'use strict';

/**
 * @ngdoc overview
 * @name capcoVideoApp
 * @description
 * # capcoVideoApp
 *
 * Main module of the application.
 */
angular
  .module('capcoVideoApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/video/:video_id', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl',
        controllerAs: 'video'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
