let _$state = new WeakMap(),
   _StudentsService = new WeakMap(),
   _$firebaseObject = new WeakMap();

class StudentsCreateController {

   constructor(StudentsService, $state, studentsSetup, $firebaseObject) {

      _$state.set(this, $state);
      _$firebaseObject.set(this, $firebaseObject);
      _StudentsService.set(this, StudentsService);

      this.setup = studentsSetup;

      this.buttonText = 'Guardar';
      this.student = {};
      this.student.documentType  = studentsSetup.documentTypes[0];
      this.student.occupation    = studentsSetup.occupations[0];
      this.student.plan          = studentsSetup.plans[0];
      this.format                = studentsSetup.format(0);
      this.setup.altInputFormats = studentsSetup.altInputFormats;
      this.setup.dateOptions     = studentsSetup.dateOptions;

   }

   openCalendar() {
      this.setup.popup.opened = true;
   }

   save() {
      let $state = _$state.get(this);

      this.students.$add(this.student).then(ref => {
         $state.go('^');
      }).catch(rejected => {
         console.log('rejected');
         console.log(rejected);
      }).finally(() => {
         console.log('finally');
      });
   }


}

StudentsCreateController.$inject = ['StudentsService', '$state', 'studentsSetup', '$firebaseObject'];

export default StudentsCreateController;