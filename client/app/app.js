import angular from 'angular';
import appLibraries from './app.libraries';
import components from './components/components';
import appComponent from './app.component';

angular.module('app', [
      appLibraries.name,
      components.name
   ])
   .component('app', appComponent);


// manually bootstrap angular
angular.bootstrap(document, ['app'], {
   strictDi: true
});