'use strict';

angular.module('pianoforteApp')
  .controller('TeacherAddressInfoCtrl', function ($scope) {
    $scope.isEditMode = false;
  })

  .directive('teacherAddressInfo', function () {
    return {
      templateUrl: 'app/directives/teacher-address-info/teacher-address-info.html',
      restrict: 'EA',
      replace: true,
      controller: 'TeacherAddressInfoCtrl',
      scope: {
        teacher: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });