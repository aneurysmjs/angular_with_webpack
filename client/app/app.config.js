appConfig.$inject = ['$httpProvider'];

function appConfig($httpProvider) {
   $httpProvider.interceptors.push('LoadingInterceptor');
}

export default appConfig;