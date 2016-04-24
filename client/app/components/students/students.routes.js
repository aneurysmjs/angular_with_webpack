studentsRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

function studentsRoutes($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/students');

   $stateProvider
      .state('students', {
         url: '/students',
         template: '<students></students>'
      })
      .state('students.create', {
         url: '/create',
         template: '<students-form ctrl="StudentsController"></students-form>'
      });

}

export default studentsRoutes;