'use strict';

describe('Filter: displayedStatus', function () {

  // load the filter's module
  beforeEach(module('pianoforteApp'));

  // initialize a new instance of the filter before each test
  var displayedStatus;
  beforeEach(inject(function ($filter) {
    displayedStatus = $filter('displayedStatus');
  }));

  it('should return the input prefixed with "displayedStatus filter:"', function () {
    var text = 'angularjs';
    expect(displayedStatus(text)).toBe('displayedStatus filter: ' + text);
  });

});
