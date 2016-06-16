import angular from 'angular';
import studentsRoutes from './students.routes';
import studentsSetup from './students.value';
import studentsComponent from './students.component';
import StudentsController from './students.controller';
import StudentsCreateController from './students-create.controller.js';
import StudentsUpdateController from './students-update.controller.js';
import StudentsService from './students.service';

import studentsForm from './students.form';

let studentsModule = angular.module('students', [])
   .config(studentsRoutes)
   .value('studentsSetup', studentsSetup)
   .component('ciStudents', studentsComponent)
   .directive('studentsForm', () => new studentsForm())
   .controller('StudentsController', StudentsController)
   .controller('StudentsUpdateController', StudentsUpdateController)
   .controller('StudentsCreateController', StudentsCreateController)
   .service('StudentsService', StudentsService);

export default studentsModule;