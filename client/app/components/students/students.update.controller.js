let _$state = new WeakMap(),
   _StudentsService = new WeakMap(),
   _$firebaseObject = new WeakMap();

class StudentsUpdateController {

   constructor(StudentsService, $state, studentsSetup, $firebaseObject) {

      _$state.set(this, $state);
      _$firebaseObject.set(this, $firebaseObject);
      _StudentsService.set(this, StudentsService);

      this.setup = studentsSetup;


      this.buttonText = 'Actualizar';

      this.setup.altInputFormats = studentsSetup.altInputFormats;
      this.setup.dateOptions     = studentsSetup.dateOptions;
      
      console.log('this');
      console.log(this);

   }

   openCalendar() {
      this.setup.popup.opened = true;
   }

   save() {
      let $state = _$state.get(this);
    
      console.log('this.student.inscriptionDate');
      console.log(this.student.inscriptionDate);
      console.log(this.student.inscriptionDate.toString());
      this.student.$save().then(ref => {
         $state.go('^');
      }).catch(rejected => {
         console.log('rejected');
         console.log(rejected);
      }).finally(() => {
         console.log('finally');
      });
   }


}

StudentsUpdateController.$inject = ['StudentsService', '$state', 'studentsSetup', '$firebaseObject'];

export default StudentsUpdateController;