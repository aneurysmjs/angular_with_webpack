import angular from 'angular';

import loadingModule from 'loader/loader';

let sharedModule = angular.module('app.shared', [
   loadingModule.name
]);


export default sharedModule;