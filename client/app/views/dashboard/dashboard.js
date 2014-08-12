'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true
      })
      .when('/dashboard', {
        templateUrl: 'app/views/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        authenticate: true
      });
  });
