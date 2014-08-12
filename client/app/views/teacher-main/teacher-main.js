'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teachers', {
        templateUrl: 'app/views/teacher-main/teacher-main.html',
        controller: 'TeacherMainCtrl',
        authenticate: true
      });
  });
