'use strict';

describe('Directive: teacherPersonalInfo', function () {

  // load the directive's module and view
  beforeEach(module('pianoforteApp'));
  beforeEach(module('app/directives/teacher-personal-info/teacher-personal-info.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<teacher-personal-info></teacher-personal-info>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the teacherPersonalInfo directive');
  }));
});