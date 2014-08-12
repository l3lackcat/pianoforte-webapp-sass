'use strict';

angular.module('pianoforteApp')
  .controller('TeacherCtrl', function ($scope, $http, $location, $routeParams, Auth) {
    $scope.teacher = null;

    $scope.initialize = function () {
      var user = Auth.getCurrentUser();
      if (user.branchId !== undefined) {
        $http.get('/api/teachers/' + user.branchId + '/' + $routeParams.teacherId).success(onSuccessReceiveTeacherInfo).error(onErrorReceiveTeacherInfo);
      } else {
      	Auth.logout();
        $location.path('/login');
      }
    };

    var onSuccessReceiveTeacherInfo = function (teacher) {
      $scope.teacher = teacher;
    };

    var onErrorReceiveTeacherInfo = function (data, status, headers, config) {
      if (status === 404) {
        $scope.teacher = null;
        // Todo
      }
    }
  });
