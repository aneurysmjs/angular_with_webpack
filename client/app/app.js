import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components';
import appComponent from './app.component';

angular.module('app', [
      uiRouter,
      components.name
   ])
   .component('app', appComponent);