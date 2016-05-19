import angular from 'angular';

import directives from './directives/directives';
import services from './services/services';
import loaderModule from './loader/loader';

let sharedModule = angular.module('app.shared', [
   directives.name,
   services.name,
   loaderModule.name
]);


export default sharedModule;