import angular from 'angular';

import directives from './directives/directives';
import services from './services/services';
import filters from './filters/filters';
import loaderModule from './loader/loader';

let sharedModule = angular.module('app.shared', [
   directives.name,
   services.name,
   filters.name,
   loaderModule.name
]);


export default sharedModule;