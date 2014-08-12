'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/students', {
        templateUrl: 'app/views/student-main/student-main.html',
        controller: 'StudentMainCtrl',
        authenticate: true
      });
  });
