'use strict';

angular.module('pianoforteApp')
  .filter('displayedPhoneNumber', function (ValidationManager) {
    return function (input) {
      if (input == null) { return input; };

      var formattedPhoneNumber = input;
      var isValid = ValidationManager.validate('phone', input)

      if ((input !== '') && (isValid === true)) {
          var part1;
          var part2;
          var part3;

          input = input.replace(/-/g, '');

          var inputLength = input.length;
          if ((inputLength === 9) && (input.substring(0, 2) === '02')) {
              part1 = input.substring(0, 2);
              part2 = input.substring(2, 5);
              part3 = input.substring(5, inputLength);
          } else {
              part1 = input.substring(0, 3);
              part2 = input.substring(3, 6);
              part3 = input.substring(6, inputLength);                    
          }

          if ((part1 !== '') && (part1 !== '') && (part1 !== '')) {
              formattedPhoneNumber = part1 + '-' + part2 + '-' + part3;
          }
      }

      return formattedPhoneNumber;
    };
  });
