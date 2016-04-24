import angular from 'angular';
import studentsRoutes from './students.routes';
import studentsComponent from './students.component';
import StudentsController from './students.controller';
import StudentsService from './students.service';

import studentsForm from './components/studentsForm/studentsForm';

let studentsModule = angular.module('students', [])
   .config(studentsRoutes)
   .component('students', studentsComponent)
   .directive('studentsForm', () => new studentsForm())
   .controller('StudentsController', StudentsController)
   .service('StudentsService', StudentsService);

export default studentsModule;