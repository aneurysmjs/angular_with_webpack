import angular from 'angular';
import loadingConfig from './loaderConfig.provider.js';
import Loading from './loader.directive.js';
import LoadingInterceptorService from './loaderInterceptor.service.js';
import LoadingDisplayService from './loaderDisplay.service.js';


let loadingModule = angular.module('app.shared.loading', [])
   .provider('loadingConfig', loadingConfig)
   .directive('loading', () => new Loading())
   .service('LoadingDisplay', LoadingDisplayService)
   .service('LoadingInterceptor', LoadingInterceptorService);

export default loadingModule;