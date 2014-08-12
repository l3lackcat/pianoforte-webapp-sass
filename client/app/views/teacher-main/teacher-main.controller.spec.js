'use strict';

describe('Controller: TeacherMainCtrl', function () {

  // load the controller's module
  beforeEach(module('pianoforteApp'));

  var TeacherMainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherMainCtrl = $controller('TeacherMainCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
