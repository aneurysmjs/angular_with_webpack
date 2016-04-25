import angular from 'angular';
import appConfig from './app.config';
import appLibraries from './app.libraries';
import appConstants from './app.constants';
import components from './components/components';
import appComponent from './app.component';
import sharedModule from './shared/shared';

angular.module('app', [
      appLibraries.name,
      components.name,
      sharedModule.name,
      appConstants.name
   ])
   .config(appConfig)
   .component('app', appComponent);


// manually bootstrap angular
angular.bootstrap(document, ['app'], {
   strictDi: true
});