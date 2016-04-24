import angular from 'angular';
import students from './students/students';

let componentModule = angular.module('app.components', [
      students.name
   ]);

export default componentModule;