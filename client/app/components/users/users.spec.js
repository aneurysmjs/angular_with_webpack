'use strict';

import UsersModule from './users'
import UsersController from './users.controller';
import UsersComponent from './users.component';
import UsersTemplate from './users.html';

describe('Users', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UsersModule.name));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UsersController();
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
      expect(UsersTemplate).toMatch(/{{\s?usersCtrl\.name\s?}}/g);
    });

  });

  describe('Component', () => {
      // component/directive specs
      let component = UsersComponent();

      it('includes the intended template',() => {
        expect(component.template).toEqual(UsersTemplate);
      });

      it('uses `controllerAs` syntax', () => {
         expect(component.controllerAs).toBeDefined();
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(UsersController);
      });

  });

});
