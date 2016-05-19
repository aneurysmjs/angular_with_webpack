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
         controller: ['students', function (students) {
            let self = this;
            self.students = students;
         }],
         controllerAs: '$ctrl',
         template: `<students-form ctrl="StudentsCreateController"
                                   students="$ctrl.students">
                    </students-form>`,
         resolve: {
            students: ['StudentsService', 'AuthService', function (StudentsService, AuthService) {
               return AuthService.$requireAuth().then(auth => {
                  return StudentsService.getStudents();
               }).catch(() => {
                  console.log('error route');
               });
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
         template: `<students-form ctrl="StudentsUpdateController"
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