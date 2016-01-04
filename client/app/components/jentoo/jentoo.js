import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jentooComponent from './jentoo.component';

let jentooModule = angular.module('jentoo', [
  uiRouter
])

.config(($stateProvider) => {
   "ngInject";
   $stateProvider
      .state('jentoo', {
         url: '/jentoo',
         template: '<jentoo></jentoo>'
      });
})

.directive('jentoo', jentooComponent);

export default jentooModule;
