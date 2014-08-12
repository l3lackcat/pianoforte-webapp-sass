'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/teachers/:teacherId', {
        templateUrl: 'app/views/teacher/teacher.html',
        controller: 'TeacherCtrl'
      });
  });
