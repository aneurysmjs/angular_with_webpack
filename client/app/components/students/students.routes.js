studentsRoutes.$inject = ['$stateProvider'];

function studentsRoutes($stateProvider) {

   $stateProvider
      .state('students', {
         url: '/students',
         template: '<students></students>'
      })
      .state('students.create', {
         url: '/create',
         template: '<students-form ctrl="StudentsController"></students-form>'
      })
      .state('students.update', {
         url: '/update/:id',
         template: '<students-form ctrl="StudentsController"></students-form>'
      });

}

export default studentsRoutes;