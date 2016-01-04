import angular from 'angular';
import Jentoo from './jentoo/jentoo';

let componentModule = angular.module('app.components', [
   Jentoo.name
]);

export default componentModule;