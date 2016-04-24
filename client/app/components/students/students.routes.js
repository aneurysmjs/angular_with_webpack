studentsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function studentsRoutes($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/students');

   $stateProvider
      .state('students', {
         url: '/students',
         template: '<students></students>'
      });

}

export default studentsRoutes;