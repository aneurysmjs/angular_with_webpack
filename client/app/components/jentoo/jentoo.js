import angular from 'angular';
import jentooComponent from './jentoo.component';
import JentooController from './jentoo.controller';
import jentooRoutes from './jentoo.routes';

let jentooModule = angular.module('jentoo', [])
   .config(jentooRoutes)
   .component('jentoo', jentooComponent)
   .controller('JentooController', JentooController);

export default jentooModule;