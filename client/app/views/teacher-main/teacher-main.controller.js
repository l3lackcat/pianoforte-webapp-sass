'use strict';

angular.module('pianoforteApp')
  .controller('TeacherMainCtrl', function ($scope, $http, $location, Auth, filterFilter, socket) {
    $scope.teacherList = [];
    $scope.currentPage = 1;
    $scope.showPerPage = 15;
    $scope.filter = {
      result: [],
      text: ''
    };
  
    $scope.initialize = function () {
      var user = Auth.getCurrentUser();
      if (user.branchId !== undefined) {
        $http.get('/api/teachers/' + user.branchId).success(onSuccessReceiveTeacherList).error(onErrorReceiveTeacherList);
      } else {
        Auth.logout();
      	$location.path('/login');
      }
    };

    $scope.$watch('filter.text', function (newInput, oldInput) {
      updateFilteredResult($scope.teacherList, newInput);
    });

    function updateFilteredResult(teacherList, filteredText) {
      $scope.filter.result = filterFilter(teacherList, filteredText);
    };

    var onSuccessReceiveTeacherList = function (teacherList) {
      $scope.teacherList = teacherList;
      socket.syncUpdates('teacher', $scope.teacherList);

      updateFilteredResult($scope.teacherList, $scope.filter.text);
    };

    var onErrorReceiveTeacherList = function (teacherList) {
      console.log('onErrorReceiveTeacherList');
    };
  });
