import loginModule from './../login'
import uiRouter from 'angular-ui-router';

describe('LoginComponent', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(loginModule.name));

   let component, $componentController, LoginService;

   beforeEach(inject((_$componentController_, _LoginService_) => {
      $componentController = _$componentController_;
      LoginService = _LoginService_;
      component = $componentController('login', null);
   }));

   it('should have login component define', () => {
      expect(component).toBeDefined();
   });

});

