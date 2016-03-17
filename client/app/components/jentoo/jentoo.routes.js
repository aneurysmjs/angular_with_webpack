jentooRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function jentooRoutes($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/jentoo');

   $stateProvider
      .state('jentoo', {
         url: '/jentoo',
         template: '<jentoo></jentoo>'
      });

}

export default jentooRoutes;