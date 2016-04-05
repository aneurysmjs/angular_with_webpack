import angular from 'angular';
import Jentoo from './jentoo/jentoo';
import Users from './users/users';

let componentModule = angular.module('app.components', [
   Jentoo.name,
   Users.name
]);

export default componentModule;