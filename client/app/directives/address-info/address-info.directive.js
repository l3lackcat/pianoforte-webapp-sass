'use strict';

angular.module('pianoforteApp')
  .controller('AddressInfoCtrl', function ($scope) {
    $scope.tempAddress = null;
    $scope.isEditMode = false;

    $scope.startEditting = function () {
      $scope.tempAddress = $scope.address;
      $scope.isEditMode = true;
    };

    $scope.stopEditting = function () {
      $scope.tempAddress = null;
      $scope.isEditMode = false;
    }
  })

  .directive('addressInfo', function () {
    return {
      templateUrl: 'app/directives/address-info/address-info.html',
      restrict: 'EA',
      replace: true,
      controller: 'AddressInfoCtrl',
      scope: {
        address: '=',
        editable: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });