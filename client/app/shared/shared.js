import angular from 'angular';

import directives from './directives/directives';
import loaderModule from './loader/loader';

let sharedModule = angular.module('app.shared', [
   directives.name,
   loaderModule.name
]);


export default sharedModule;