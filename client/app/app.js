'use strict';

angular.module('pianoforteApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'btford.socket-io',
  'ui.bootstrap',
  'pascalprecht.translate'
])
  .config(function ($httpProvider, $locationProvider, $routeProvider, $translateProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $locationProvider.html5Mode(true);

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.translations('en', {
      FIND_TEACHERS: 'Find Teachers',
      FIRSTNAME: 'Firstname',
      HOME: 'Home',
      ID: 'ID',
      LASTNAME: 'Lastname',
      NAME: 'Name',
      NICKNAME: 'Nickname',
      PERSONAL_INFO: 'Personal information',
      TEL: 'Tel.',
      VIEW: 'View'
    });

    $translateProvider.preferredLanguage('en');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });