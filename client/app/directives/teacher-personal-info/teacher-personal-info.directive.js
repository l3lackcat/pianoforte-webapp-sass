'use strict';

angular.module('pianoforteApp')
  .controller('TeacherPersonalInfoCtrl', function ($scope) {
    $scope.tempTeacher = null;
    $scope.isEditMode = false;

    $scope.startEditting = function () {
      $scope.tempTeacher = {
        id: $scope.teacher.id,
        firstname: $scope.teacher.firstname,
        lastname: $scope.teacher.lastname,
        nickname: $scope.teacher.nickname,
        status: $scope.teacher.status
      };

      $scope.isEditMode = true;      
    };

    $scope.stopEditting = function () {
      $scope.tempTeacher = null;
      $scope.isEditMode = false;
    }
  })

  .directive('teacherPersonalInfo', function () {
    return {
      templateUrl: 'app/directives/teacher-personal-info/teacher-personal-info.html',
      restrict: 'EA',
      replace: true,
      controller: 'TeacherPersonalInfoCtrl',
      scope: {
        teacher: '=',
        editable: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });