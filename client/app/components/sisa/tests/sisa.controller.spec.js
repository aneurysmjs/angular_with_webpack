import sisaModule from './../sisa'
import uiRouter from 'angular-ui-router';

describe('SisaController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(sisaModule.name));

   let sisaCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      sisaCtrl = $controller('SisaController', {$scope});
   }));

   it('should have name defined', () => {
      expect(sisaCtrl.name).toBeDefined();
   });

});

