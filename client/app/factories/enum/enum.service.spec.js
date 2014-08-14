'use strict';

describe('Service: enum', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var enum;
  beforeEach(inject(function (_enum_) {
    enum = _enum_;
  }));

  it('should do something', function () {
    expect(!!enum).toBe(true);
  });

});
