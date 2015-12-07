'use strict';

import JentooModule from './jentoo'
import JentooController from './jentoo.controller';
import JentooComponent from './jentoo.component';
import JentooTemplate from './jentoo.html';

describe('Jentoo', () => {
  let $rootScope, makeController;

  beforeEach(window.module(JentooModule.name));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new JentooController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
       expect(controller.name).toBeDefined();
    });

  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(JentooTemplate).toMatch(/{{\s?jentooCtrl\.name\s?}}/g);
    });

  });

  describe('Component', () => {
      // component/directive specs
      let component = JentooComponent();

      it('includes the intended template',() => {
        expect(component.template).toEqual(JentooTemplate);
      });

      it('uses `controllerAs` syntax', () => {
         expect(component.controllerAs).toBeDefined();
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(JentooController);
      });

  });

});
