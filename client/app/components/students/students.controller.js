class StudentsController {

   constructor(StudentsService, $stateParams, $state, studentsSetup) {
      this.StudentsService = StudentsService;
      this.$state = $state;
      this.setup = studentsSetup;
      this.format = studentsSetup.format(0);
      this.buttonText = 'Guardar';

      StudentsService.getStudents().then(response => {
         this.students = response;
      });

      if ($stateParams.id) {
         this.getStudent($stateParams.id);
         this.isUpdate = true;
         this.buttonText = 'Actualizar';
      }

      this.student = {};

      this.student.documentType = studentsSetup.documentTypes[0];
      this.student.occupation   = studentsSetup.occupations[0];
      this.student.plan         = studentsSetup.plans[0];

   }

   successHandler(students) {

   }

   catchHandler(error) {
      console.log('error');
      console.log(error);
   }

   openCalendar() {
      this.setup.popup.opened = true;
   }

   studentProfile(student) {
      this.$state.go('students.update', {id: student.$id});
   }

   getStudent(id) {
      this.StudentsService.getStudent(id).then(response => {
         this.student = response;
      });
   }

   save() {
      if (this.isUpdate) {

         this.students.$save(this.student).then(function(ref) {

         });

      } else {
         this.students.$add(this.student).then(this.successHandler);
      }
   }

   deleteStudent(student){

      this.students.$remove(student).then((ref) => {
        console.log('deteleStudent response');
        console.log(ref);
      });

   }

}

StudentsController.$inject = ['StudentsService', '$stateParams', '$state', 'studentsSetup'];

export default StudentsController;