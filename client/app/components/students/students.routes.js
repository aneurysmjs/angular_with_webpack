studentsRoutes.$inject = ['$stateProvider'];

function studentsRoutes($stateProvider) {

   $stateProvider
      .state('students', {
         url: '/students',
         controller: ['students', function (students) {
            let self = this;
            self.students = students;
         }],
         controllerAs: '$ctrl',
         template: '<ci-students students="$ctrl.students"></ci-students>',
         resolve: {
            students: ['StudentsService', 'AuthService', function (StudentsService, AuthService) {
               return AuthService.$requireAuth().then(auth => {
                  return StudentsService.getStudents();
               });

            }]
         }
      })
      .state('students.create', {
         url: '/create',
         template: '<students-form ctrl="StudentsController"></students-form>',
         resolve: {
            currentAuth: ['LoginService', function (LoginService) {
               return LoginService.$requireAuth();
            }]
         }
      })
      .state('students.update', {
         url: '/update/:id',
         template: '<students-form ctrl="StudentsController"></students-form>',
         resolve: {
            currentAuth: ['LoginService', function (LoginService) {
               return LoginService.$requireAuth();
            }]
         }
      });

}

export default studentsRoutes;