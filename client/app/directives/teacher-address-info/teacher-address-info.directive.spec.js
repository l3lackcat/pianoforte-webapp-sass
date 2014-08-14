'use strict';

describe('Directive: teacherAddressInfo', function () {

  // load the directive's module and view
  beforeEach(module('pianoforteApp'));
  beforeEach(module('app/directives/teacher-address-info/teacher-address-info.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<teacher-address-info></teacher-address-info>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the teacherAddressInfo directive');
  }));
});