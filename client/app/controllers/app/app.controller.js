'use strict';

angular.module('pianoforteApp')
  .controller('AppCtrl', function ($scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
  });
