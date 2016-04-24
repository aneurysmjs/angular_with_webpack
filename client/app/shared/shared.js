import angular from 'angular';

import loaderModule from './loader/loader';

let sharedModule = angular.module('app.shared', [
   loaderModule.name
]);


export default sharedModule;