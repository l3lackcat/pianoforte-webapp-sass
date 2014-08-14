'use strict';

angular.module('pianoforteApp')
  .filter('displayedStatus', function ($translate, Enum) {
    return function (input, type) {
      var str = '';
      var keyList = [];

      if (type === 'ContactType') {
        keyList = _.keys(Enum.Status);
      } else if (type === 'Status') {
        keyList = _.keys(Enum.Status);
      }

      if (keyList[input] !== undefined) {
        var translatedKey = 'ENUM.' + type.toUpperCase() + '.' + keyList[input];
        str = $translate.instant(translatedKey);
      }

      return str;
    };
  });
