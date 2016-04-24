class StudentsController {

   constructor(StudentsService, $firebaseArray, $stateParams, $state) {
      this.StudentsService = StudentsService;
      this.$state = $state;
      this.documentTypes = ['TI', 'CC', 'PAS'];
      this.ocupations = ['dependiente', 'independiente', 'estudiante'];
      this.plans = ['cuarzo', 'rubí', 'záfiro', 'esmeralda', 'turqueza', 'diamante'];
      this.dateOptions = {
         formatYear: 'yy',
         maxDate: new Date(2020, 5, 22),
         minDate: new Date(),
         startingDay: 1
      };

      this.altInputFormats = ['M!/d!/yyyy'];
      this.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      this.format = this.formats[0];

      this.popup = {
         opened: false
      };

      this.inlineOptions = {
         //customClass: getDayClass,
         minDate: new Date(),
         showWeeks: true
      };

      this.isUpdate = false;

      StudentsService.getStudents().then(response => {
         this.students = response;
      });

      if ($stateParams.id) {
         this.getStudent($stateParams.id);
         this.isUpdate = true;
      }

   }

   successHandler(students) {

   }

   catchHandler(error) {
      console.log('error');
      console.log(error);
   }

   openCalendar() {
      this.popup.opened = true;
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
            //ref.key() === this.students[2].$id; // true
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

StudentsController.$inject = ['StudentsService', '$firebaseArray', '$stateParams', '$state'];

export default StudentsController;