class StudentsController {

   constructor(StudentsService, $stateParams, $state, studentsSetup) {
      this.StudentsService = StudentsService;
      this.$state = $state;
      this.setup = studentsSetup;
      this.buttonText = 'Guardar';

      StudentsService.getStudents().then(response => {
         this.students = response;
      });

      if ($stateParams.id) {
         this.getStudent($stateParams.id);
         this.isUpdate = true;
         this.buttonText = 'Actualizar';
      } else {
         this.student = {};
         this.student.documentType  = studentsSetup.documentTypes[0];
         this.student.occupation    = studentsSetup.occupations[0];
         this.student.plan          = studentsSetup.plans[0];
         this.format          = studentsSetup.format(0);
         this.setup.altInputFormats = studentsSetup.altInputFormats;
         this.setup.dateOptions     = studentsSetup.dateOptions;
      }

   }

   successHandler(success) {
      console.log('success');
      console.log(success);
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
      this.StudentsService.getStudent(id).then(response => this.student = response);
   }

   save() {
      //this.student.inscriptionDate.toString();
      if (this.isUpdate) {
         this.students.$save(this.student).then(ref => this.$state.go('^'));
      } else {
         this.students.$add(this.student).then(res => this.$state.go('^'));
      }
   }

   deleteStudent(student){
      let index = this.students.indexOf(student);

      this.students.splice(index, 1);

      /*this.students.$remove(student).then((ref) => {
        console.log('deteleStudent response');
        console.log(ref);
      });*/

   }

}

StudentsController.$inject = ['StudentsService', '$stateParams', '$state', 'studentsSetup'];

export default StudentsController;