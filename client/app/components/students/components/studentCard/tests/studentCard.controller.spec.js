import studentCardModule from './../studentCard'
import uiRouter from 'angular-ui-router';

describe('StudentCardController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(studentCardModule.name));

   let studentCardCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      studentCardCtrl = $controller('StudentCardController', {$scope});
   }));

   it('should have name defined', () => {
      expect(studentCardCtrl.name).toBeDefined();
   });

});

