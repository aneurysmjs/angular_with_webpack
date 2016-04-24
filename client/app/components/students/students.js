import angular from 'angular';
import studentsRoutes from './students.routes';
import studentsComponent from './students.component';
import StudentsController from './students.controller';
import StudentsService from './students.service';

let studentsModule = angular.module('students', [])
   .config(studentsRoutes)
   .component('students', studentsComponent)
   .controller('StudentsController', StudentsController)
   .service('StudentsService', StudentsService);

export default studentsModule;