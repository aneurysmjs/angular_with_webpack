JentooController.$inject = ['JentooService', '$firebaseArray'];

function JentooController(JentooService, $firebaseArray) {
   'use strict';

   let self = this;

   let ref = new Firebase('https://olgah.firebaseio.com/users');

   console.log('ref');
   console.log(ref);


   self.documentTypes = ['TI', 'CC', 'PAS'];
   self.ocupations = ['dependiente', 'independiente', 'estudiante'];
   self.plans = ['cuarzo', 'rubí', 'záfiro', 'esmeralda', 'turqueza', 'diamante'];

   self.olgah = $firebaseArray(ref);
   

   self.olgah.$loaded().then(successHandler).catch(catchHandler);

   function successHandler(e) {

      console.log('e');
      console.log(e);

      //console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
      console.log("loaded record:");

      self.olgah.forEach(student => {
         console.log('student');
         console.log(student);
      });
      // To iterate the key/value pairs of the object, use angular.forEach()
      /* angular.forEach(obj, function(value, key) {
       console.log(key, value);
       });*/

   }

   function catchHandler(error) {
      console.log('error');
      console.log(error);
   }

   self.inlineOptions = {
      //customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
   };

   /*function getDayClass(data) {
      var date = data.date,
         mode = data.mode;
      if (mode === 'day') {
         var dayToCheck = new Date(date).setHours(0,0,0,0);

         for (var i = 0; i < self.events.length; i++) {
            var currentDay = new Date(self.events[i].date).setHours(0,0,0,0);

            if (dayToCheck === currentDay) {
               return self.events[i].status;
            }
         }
      }

      return '';
   }*/


   self.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
   };


   self.altInputFormats = ['M!/d!/yyyy'];
   self.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
   self.format = self.formats[0];

   self.popup = {
      opened: false
   };

   self.openCalendar = openCalendar;

   function openCalendar() {
      self.popup.opened = true;
   }

   self.addStudent = function() {
      console.log('self.student');
      console.log(self.student);
      self.olgah.$add(self.student).then(successHandler);
   };

}

export default JentooController;
