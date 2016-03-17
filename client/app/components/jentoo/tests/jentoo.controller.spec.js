'use strict';
import JentooModule from './../jentoo';
import uiRouter from 'angular-ui-router';

describe('JentooController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(JentooModule.name));

   let jentooCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      jentooCtrl = $controller('JentooController', {$scope});
   }));

   it('should have name defined', () => {
      expect(jentooCtrl.name).toBeDefined();
   });

   it('should have name equals \'jentoo\'', () => {
      expect(jentooCtrl.name === 'jentoo');
   });

});
