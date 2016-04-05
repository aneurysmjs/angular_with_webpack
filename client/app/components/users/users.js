import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usersComponent from './users.component';

let usersModule = angular.module('users', [
    uiRouter
  ])
  .directive('users', usersComponent);

export default usersModule;
