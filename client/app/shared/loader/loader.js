import angular from 'angular';
import loaderConfig from './loaderConfig.provider.js';
import Loading from './loader.directive.js';
import LoadingInterceptorService from './loaderInterceptor.service.js';
import LoadingDisplayService from './loaderDisplay.service.js';


let loadingModule = angular.module('app.shared.loading', [])
   .provider('loaderConfig', loaderConfig)
   .directive('loading', Loading)
   .service('LoadingDisplay', LoadingDisplayService)
   .service('LoadingInterceptor', LoadingInterceptorService);

export default loadingModule;