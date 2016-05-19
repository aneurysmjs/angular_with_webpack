import loginModule from './../login'
import uiRouter from 'angular-ui-router';

describe('LoginController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(loginModule.name));

   let loginCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      loginCtrl = $controller('LoginController', {$scope});
   }));

   it('should have name defined', () => {
      expect(loginCtrl.name).toBeDefined();
   });

});

