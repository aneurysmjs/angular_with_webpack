import studentProfileModule from './../studentProfile'
import uiRouter from 'angular-ui-router';

describe('StudentProfileController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(studentProfileModule.name));

   let studentProfileCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      studentProfileCtrl = $controller('StudentProfileController', {$scope});
   }));

   it('should have name defined', () => {
      expect(studentProfileCtrl.name).toBeDefined();
   });

});

