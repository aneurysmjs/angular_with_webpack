import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dragular from 'dragular';

console.log('dragular');
console.log(dragular);

let appLibraries = angular.module('app.libraries', [
      uiRouter
   ]);

export default appLibraries;