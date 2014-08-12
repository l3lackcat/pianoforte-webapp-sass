'use strict';

angular.module('pianoforteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/books', {
        templateUrl: 'app/views/book-main/book-main.html',
        controller: 'BookMainCtrl',
        authenticate: true
      });
  });
