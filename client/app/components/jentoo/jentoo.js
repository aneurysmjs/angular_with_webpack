import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jentooComponent from './jentoo.component';

let jentooModule = angular.module('jentoo', [
  uiRouter
])

.directive('jentoo', jentooComponent);

export default jentooModule;
