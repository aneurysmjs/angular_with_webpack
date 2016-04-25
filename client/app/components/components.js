import angular from 'angular';
import login from './login/login';
import students from './students/students';

let componentModule = angular.module('app.components', [
      login.name,
      students.name
   ]);

export default componentModule;