'use strict';

describe('Service: conversionManager', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var conversionManager;
  beforeEach(inject(function (_conversionManager_) {
    conversionManager = _conversionManager_;
  }));

  it('should do something', function () {
    expect(!!conversionManager).toBe(true);
  });

});
