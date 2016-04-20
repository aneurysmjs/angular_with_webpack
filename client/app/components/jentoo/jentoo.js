import angular from 'angular';
import jentooRoutes from './jentoo.routes';
import jentooComponent from './jentoo.component';
import JentooController from './jentoo.controller';
import JentooService from './jentoo.service';

let jentooModule = angular.module('jentoo', [])
   .config(jentooRoutes)
   .component('jentoo', jentooComponent)
   .controller('JentooController', JentooController)
   .service('JentooService', JentooService);

export default jentooModule;