import template from './students-modal.html';
import controller from './students-modal.controller.js';

let _$uibModal = new WeakMap();

class StudentsController {

   constructor(StudentsService, $stateParams, $state, studentsSetup, $uibModal) {

      this.StudentsService = StudentsService;
      this.$uibModal = $uibModal;
      this.setup = studentsSetup;
      this.$state = $state;
      this.buttonText = 'Guardar';

      if ($stateParams.id) {
         this.isUpdate = true;
         this.buttonText = 'Actualizar';
      } else {
         this.student = StudentsService.student();

         this.format = studentsSetup.format(0);
         this.setup.altInputFormats = studentsSetup.altInputFormats;
         this.setup.dateOptions = studentsSetup.dateOptions;
      }

   }

   $onInit() {
      this.curPage = 0;
      this.pageSize = 5;
      this.searchFor = '';
      this.isAll = false;
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
      let index = this.students.indexOf(student);

      this.$uibModal.open({
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

   numberOfPages() {
      return Math.ceil(this.students.length / this.pageSize);
   }

   displayAll() {
      if (this.isAll) {
         this.pageSize = this.students.length;
         this.curPage = 0;
      } else {
         this.pageSize = 5;
      }
   }
}

StudentsController.$inject = ['StudentsService', '$stateParams', '$state', 'studentsSetup', '$uibModal'];

export default StudentsController;