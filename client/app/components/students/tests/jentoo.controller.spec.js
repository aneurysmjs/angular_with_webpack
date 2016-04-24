'use strict';
import JentooModule from './../students';
import uiRouter from 'angular-ui-router';

describe('JentooController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(JentooModule.name));

   let studentsCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      studentsCtrl = $controller('JentooController', {$scope});
   }));

   it('should have name defined', () => {
      expect(studentsCtrl.name).toBeDefined();
   });

   it('should have name equals \'students\'', () => {
      expect(studentsCtrl.name === 'students');
   });

});
