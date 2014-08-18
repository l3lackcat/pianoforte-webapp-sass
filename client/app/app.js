'use strict';

angular.module('pianoforteApp', [
  'btford.socket-io',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.bootstrap'
  // 'ui.select2'
])
  .config(function ($httpProvider, $locationProvider, $routeProvider, $translateProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $locationProvider.html5Mode(true);

    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $translateProvider.translations('en', {
      'ENUM.CONTACT_TYPE.EMAIL': 'Email',
      'ENUM.CONTACT_TYPE.PHONE': 'Phone',

      'ENUM.STATUS.ACTIVE': 'Active',
      'ENUM.STATUS.AVAILABLE': 'Available',
      'ENUM.STATUS.CANCELLED': 'Cancelled',
      'ENUM.STATUS.COMPLETED': 'Completed',
      'ENUM.STATUS.DELETED': 'Deleted',
      'ENUM.STATUS.DROP': 'Drop',
      'ENUM.STATUS.HOLIDAY': 'Holiday',
      'ENUM.STATUS.INACTIVE': 'Inactive',
      'ENUM.STATUS.OUT_OF_STOCK': 'Out of stock',
      'ENUM.STATUS.PAID': 'Paid',
      'ENUM.STATUS.POSTPONED': 'Postponed',
      'ENUM.STATUS.RESIGNED': 'Resigned',
      'ENUM.STATUS.STUDENT_ABSENCE': 'Student absence',
      'ENUM.STATUS.STUDENT_MISSING': 'Student missing',
      'ENUM.STATUS.TEACHER_ABSENCE': 'Teacher absence',
      'ENUM.STATUS.TEACHER_MISSING': 'Teacher missing',
      'ENUM.STATUS.TEACHER_RESIGNED': 'Teacher has resigned',
      'ENUM.STATUS.UNPAID': 'Unpaid',
      'ENUM.STATUS.WAITING': 'Waiting',

      'LABEL.ADD': 'Add',
      'LABEL.ADDRESS_INFO': 'Address information',
      'LABEL.BUILDING_NAME': 'Build name',
      'LABEL.CANCEL': 'Cancel',
      'LABEL.CONTACT_INFO': 'Contact information',
      'LABEL.CONTACT_LABEL': 'Contact label',
      'LABEL.DISTRICT': 'District',
      'LABEL.EDIT': 'Edit',
      'LABEL.EMAILS': 'Emails',
      'LABEL.EMAIL_ADDRESS': 'Email address',
      'LABEL.FIND_TEACHERS': 'Find teachers',
      'LABEL.FIRSTNAME': 'First name',
      'LABEL.HOME': 'Home',
      'LABEL.ID': 'ID',
      'LABEL.LASTNAME': 'Last name',
      'LABEL.NAME': 'Name',
      'LABEL.NICKNAME': 'Nick name',
      'LABEL.PERSONAL_INFO': 'Personal information',
      'LABEL.PHONES': 'Phones',
      'LABEL.PHONE_NUMBER': 'Phone number',
      'LABEL.PROVINCE': 'Province',
      'LABEL.STATUS': 'Status',
      'LABEL.STREET_ADDRESS': 'Street address',
      'LABEL.SUBDISTRICT': 'Subdistrict',
      'LABEL.SUBMIT': 'Submit',
      'LABEL.TEL': 'Tel.',
      'LABEL.VIEW': 'View',
      'LABEL.ZIP_CODE': 'Zip Code'
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