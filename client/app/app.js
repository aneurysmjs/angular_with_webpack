import angular from 'angular';
import AppComponent from './app_component';

angular
   .module('app', [])
   .directive('app', AppComponent);
