'use strict';

describe('Filter: displayedPhoneNumber', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedPhoneNumber;
  beforeEach(inject(function ($filter) {
    displayedPhoneNumber = $filter('displayedPhoneNumber');
  }));

  it('should return the input prefixed with "displayedPhoneNumber filter:"', function () {
    var text = 'angularjs';
    expect(displayedPhoneNumber(text)).toBe('displayedPhoneNumber filter: ' + text);
  });

});
