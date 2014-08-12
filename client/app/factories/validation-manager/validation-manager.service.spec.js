'use strict';

describe('Service: ValidationManager', function () {

  // load the service's module
  beforeEach(module('pianoforteApp'));

  // instantiate service
  var validationManager;
  beforeEach(inject(function (_validationManager_) {
    validationManager = _validationManager_;
  }));

  it('should do something', function () {
    expect(!!validationManager).toBe(true);
  });

});
