import angular from 'angular';
import jentoo from './jentoo/jentoo';

let componentModule = angular.module('app.components', [
      jentoo.name
   ]);

export default componentModule;