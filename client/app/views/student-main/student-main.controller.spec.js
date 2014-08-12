'use strict';

describe('Controller: StudentMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var StudentMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentMainCtrl = $controller('StudentMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
