import loginModule from './../login'
import uiRouter from 'angular-ui-router';

describe('LoginComponent', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(loginModule.name));

   let component, $rootScope, $scope, $componentController, LoginService;

   beforeEach(inject((_$componentController_, _$rootScope_, _LoginService_) => {
      $rootScope = _$rootScope_;
      $componentController = _$componentController_;
      $scope = $rootScope.$new();
      LoginService = _LoginService_;
   }));

   it('should have component', () => {
      component = $componentController('login', null);
   });

});

