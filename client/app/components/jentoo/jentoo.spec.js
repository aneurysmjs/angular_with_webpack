'use strict';

var JentooModule = require('./jentoo');
var JentooController = require('./jentoo.controller');
var JentooComponent = require('./jentoo.component');
var JentooTemplate = require('./jentoo.html');

describe('Jentoo', function () {
  var $rootScope, makeController;

  beforeEach(window.module(JentooModule.name));

  beforeEach(inject(function (_$rootScope_) {
    $rootScope = _$rootScope_;
    makeController = function () {
      return new JentooController();
    };
  }));

  describe('Module', function () {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', function () {
    // controller specs
    it('has a name property', function () { // erase if removing this.name from the controller
      var controller = makeController();
       expect(controller.name).toBeDefined();
    });

  });

  describe('Template', function () {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', function () {
      expect(JentooTemplate).toMatch(/{{\s?jentooCtrl\.name\s?}}/g);
    });

  });

  describe('Component', function () {
      // component/directive specs
      var component = JentooComponent();

      it('includes the intended template',function () {
        expect(component.template).toEqual(JentooTemplate);
      });

      it('uses `controllerAs` syntax', function () {
         expect(component.controllerAs).toBeDefined();
      });

      it('invokes the right controller', function () {
        expect(component.controller).toEqual(JentooController);
      });

  });

});
