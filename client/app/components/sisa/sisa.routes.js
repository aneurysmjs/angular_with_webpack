sisaRoutes.$inject = ['$stateProvider'];

function sisaRoutes($stateProvider) {

   $stateProvider
      .state('sisa', {
         url: '/sisa',
         template: '<sisa></sisa>'
      });

}

export default sisaRoutes;