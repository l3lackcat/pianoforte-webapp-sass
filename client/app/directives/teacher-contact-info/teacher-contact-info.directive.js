'use strict';

angular.module('pianoforteApp')
  .controller('TeacherContactInfoCtrl', function ($scope) {
    $scope.isEditMode = false;
  })

  .directive('teacherContactInfo', function () {
    return {
      templateUrl: 'app/directives/teacher-contact-info/teacher-contact-info.html',
      restrict: 'EA',
      replace: true,
      controller: 'TeacherContactInfoCtrl',
      scope: {
        teacher: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });