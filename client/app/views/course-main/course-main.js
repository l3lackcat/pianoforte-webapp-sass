'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/courses', {
        templateUrl: 'app/views/course-main/course-main.html',
        controller: 'CourseMainCtrl',
        authenticate: true
      });
  });
