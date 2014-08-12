'use strict';

describe('Controller: BookMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var BookMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookMainCtrl = $controller('BookMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
