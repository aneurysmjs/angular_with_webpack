import angular from 'angular';
import studentsRoutes from './students.routes';
import studentsSetup from './students.value';
import studentsComponent from './students.component';
import StudentsController from './students.controller';
import StudentsService from './students.service';

import studentsForm from './components/studentsForm/studentsForm';
import studentCard from './components/studentCard/studentCard';
import studentProfile from './components/studentProfile/studentProfile';

let studentsModule = angular.module('students', [
      studentCard.name,
      studentProfile.name
   ])
   .config(studentsRoutes)
   .value('studentsSetup', studentsSetup)
   .component('ciStudents', studentsComponent)
   .directive('studentsForm', () => new studentsForm())
   .controller('StudentsController', StudentsController)
   .service('StudentsService', StudentsService);

export default studentsModule;