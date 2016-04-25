import angular from 'angular';
import loginRoutes from './login.routes';
import loginComponent from './login.component';
import LoginController from './login.controller';
import LoginService from './login.service';

let loginModule = angular.module('login', [])
   .config(loginRoutes)
   .component('login', loginComponent)
   .controller('LoginController', LoginController)
   .service('LoginService', LoginService);

export default loginModule;
