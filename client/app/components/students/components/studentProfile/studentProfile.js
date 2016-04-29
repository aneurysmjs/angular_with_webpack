import angular from 'angular';
import studentProfileComponent from './studentProfile.component';
import StudentProfileController from './studentProfile.controller';

let studentProfileModule = angular.module('studentProfile', [])
   .component('studentProfile', studentProfileComponent)
   .controller('StudentProfileController', StudentProfileController);

export default studentProfileModule;
