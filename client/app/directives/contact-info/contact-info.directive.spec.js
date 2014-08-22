'use strict';

describe('Directive: contactInfo', function () {

  // load the directive's module and view
  beforeEach(module('pianoforteApp'));
  beforeEach(module('app/directives/contact-info/contact-info.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contact-info></contact-info>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the contactInfo directive');
  }));
});