'use strict';

angular.module('pianoforteApp')
  .factory('ConversionManager', function () {
    return {
      parseJsonDate: function(jsonDateString) {
        return moment(jsonDateString);
      }
    };
  });
