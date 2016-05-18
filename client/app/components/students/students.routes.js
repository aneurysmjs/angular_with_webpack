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
         controller: ['auth', 'student', function (auth, student) {
            let self = this;
            self.auth = auth;
            self.student = student;
         }],
         controllerAs: '$ctrl',
         template: `<students-form ctrl="StudentsController"
                                   auth="$ctrl.auth"
                                   student="$ctrl.student">
                   </students-form>`,
         resolve: {
            auth: ['AuthService', '$state', (AuthService, $state) => {
               return AuthService.$requireAuth().catch((error) => $state.go('login')) ;
            }],
            student: ['AuthService', 'StudentsService', '$stateParams', (AuthService, StudentsService, $stateParams) => {
               let uid = $stateParams.id;
               return AuthService.$requireAuth().then(auth => {
                  return StudentsService.getStudent(uid).$loaded();
               }, error => error);
            }]
         }
      });

}

export default studentsRoutes;