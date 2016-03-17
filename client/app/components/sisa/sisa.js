import angular from 'angular';
import sisaRoutes from './sisa.routes';
import sisaComponent from './sisa.component';
import SisaController from './sisa.controller';

let sisaModule = angular.module('sisa', [])
   .config(sisaRoutes)
   .component('sisa', sisaComponent)
   .controller('SisaController', SisaController);

export default sisaModule;
