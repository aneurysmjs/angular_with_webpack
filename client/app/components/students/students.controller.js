import template from './students.modal.html';
import controller from './students.modal.controller';

let _$uibModal = new WeakMap();

class StudentsController {

   constructor(StudentsService, $stateParams, $state, studentsSetup, $uibModal) {

      _$uibModal.set(this, $uibModal);
      this.StudentsService = StudentsService;
      this.$state = $state;
      this.setup = studentsSetup;
      this.buttonText = 'Guardar';

      if ($stateParams.id) {
         this.isUpdate = true;
         this.buttonText = 'Actualizar';
      } else {
         this.student = {};
         this.student.documentType  = studentsSetup.documentTypes[0];
         this.student.occupation    = studentsSetup.occupations[0];
         this.student.plan          = studentsSetup.plans[0];
         this.format                = studentsSetup.format(0);
         this.setup.altInputFormats = studentsSetup.altInputFormats;
         this.setup.dateOptions     = studentsSetup.dateOptions;
      }

      /*console.log('this');
      console.log(this);*/

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

   deleteStudent(student) {
      let index = this.students.indexOf(student),
          $uibModal = _$uibModal.get(this);

      $uibModal.open({
         animation: true,
         template,
         controller,
         controllerAs: '$ctrl',
         bindToController: true
      }).result.then(() => {
         console.log('successHandler');
         this.students.$remove(student).then((ref) => {
            console.log('deteleStudent response');
            console.log(ref);
         }).catch(reason => {
            console.log('reason');
            console.log(reason);
         }).finally(() => {
            console.log('finally');
         });
      }).catch(() => {
         console.log('rejectHandler');
      });


   }

}

StudentsController.$inject = ['StudentsService', '$stateParams', '$state', 'studentsSetup', '$uibModal'];

export default StudentsController;