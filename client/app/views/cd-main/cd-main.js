'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/cds', {
        templateUrl: 'app/views/cd-main/cd-main.html',
        controller: 'CdMainCtrl',
        authenticate: true
      });
  });
