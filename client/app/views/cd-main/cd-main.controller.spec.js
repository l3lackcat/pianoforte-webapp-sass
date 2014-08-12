'use strict';

describe('Controller: CdMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var CdMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CdMainCtrl = $controller('CdMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
