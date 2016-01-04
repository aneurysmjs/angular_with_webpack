jentooRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function jentooRoutes($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.when("/", "/jentoo");
   $urlRouterProvider.otherwise('/jentoo');

   $stateProvider
      .state('jentoo', {
         url: '/jentoo',
         template: '<jentoo></jentoo>'
      });

}

export default jentooRoutes;