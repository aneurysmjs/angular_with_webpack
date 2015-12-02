import angular from 'angular';
import components from './components/index.js';

const ngModule = angular.module('app', []);

components(ngModule);

