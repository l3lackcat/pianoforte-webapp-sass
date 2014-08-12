'use strict';

describe('Controller: CourseMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var CourseMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourseMainCtrl = $controller('CourseMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
