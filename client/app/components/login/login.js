import angular from 'angular';
import loginRoutes from './login.routes';
import loginComponent from './login.component';
import LoginController from './login.controller';
import LoginService from './login.service';

import appLibraries from '../../app.libraries';
import appConstants from '../../app.constants';

import registerComponent from './components/register/register.component';

let loginModule = angular.module('login', [
      appLibraries.name,
      appConstants.name
   ])
   .config(loginRoutes)
   .component('login', loginComponent)
   .component('register', registerComponent)
   .controller('LoginController', LoginController)
   .service('LoginService', LoginService);

export default loginModule;
