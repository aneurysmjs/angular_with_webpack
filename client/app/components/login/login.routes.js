loginRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function loginRoutes($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/login');

   $stateProvider
      .state('login', {
         url: '/login',
         template: '<login></login>'
      })
      .state('login.register', {
         url: '/register',
         template: '<register></register>'
      });

}

export default loginRoutes;