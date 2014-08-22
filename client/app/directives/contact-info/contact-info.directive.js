'use strict';

angular.module('pianoforteApp')
  .controller('ContactInfoCtrl', function ($scope) {
    $scope.isEditMode = false;
  })

  .directive('contactInfo', function () {
    return {
      templateUrl: 'app/directives/contact-info/contact-info.html',
      restrict: 'EA',
      replace: true,
      controller: 'ContactInfoCtrl',
      scope: {
        contacts: '=',
        editable: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });