class StudentsController {

   constructor(StudentsService, $firebaseArray) {

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

      StudentsService.getStudents().then(response => {
         console.log('response');
         console.log(response);
         this.students = response;
      });

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

   addStudent() {
      console.log('this.student');
      console.log(this.student);
      this.students.$add(this.student).then(this.successHandler);
   }

   deleteStudent(student){

      this.students.$remove(student).then((ref) => {
        console.log('deteleStudent response');
        console.log(ref);
      });
   }

}

StudentsController.$inject = ['StudentsService', '$firebaseArray'];

export default StudentsController;