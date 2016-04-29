import angular from 'angular';
import studentCardComponent from './studentCard.component';
import StudentCardController from './studentCard.controller';

let studentCardModule = angular.module('studentCard', [])
   .component('studentCard', studentCardComponent)
   .controller('StudentCardController', StudentCardController);

export default studentCardModule;
