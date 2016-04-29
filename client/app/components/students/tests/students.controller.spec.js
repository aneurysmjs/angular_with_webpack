'use strict';
import StudentModule from '../students';
import uiRouter from 'angular-ui-router';

xdescribe('StudentController', () => {

   beforeEach(window.module(uiRouter));
   beforeEach(window.module(StudentModule.name));

   let studentsCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      $scope = $rootScope.$new();
      studentsCtrl = $controller('StudentController', {$scope});
   }));

   it('should have name defined', () => {
      expect(studentsCtrl.name).toBeDefined();
   });

   it('should have name equals \'students\'', () => {
      expect(studentsCtrl.name === 'students');
   });

});
