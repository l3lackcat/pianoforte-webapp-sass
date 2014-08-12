'use strict';

angular.module('pianoforteApp')
  .directive('teacherPersonalInfo', function () {
    return {
      templateUrl: 'app/directives/teacher-personal-info/teacher-personal-info.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });