'use strict';
import JentooModule from './../jentoo';
import uiRouter from 'angular-ui-router';

describe('JentooController', () => {

   beforeEach(window.module(JentooModule.name));
   beforeEach(window.module(uiRouter));

   let jentooCtrl, $rootScope, $scope, $controller;

   beforeEach(inject((_$controller_, _$rootScope_) => {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
      jentooCtrl = $controller('JentooController');
   }));

   it('should have name defined', () => {
      console.log('--- $scope ---');
      console.log($scope);
      console.log('--- jentooCtrl ---');
      console.log(jentooCtrl);
   });

});
