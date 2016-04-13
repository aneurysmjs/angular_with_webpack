JentooController.$inject = ['$firebaseObject'];

function JentooController($firebaseObject) {
   'use strict';

   let self = this;

   let ref = new Firebase('https://olgah.firebaseio.com/users');

   console.log('ref');
   console.log(ref);

   self.olgah = $firebaseObject(ref);
   
   console.log('self.ogah');
   console.log(self.ogah);

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

}

export default JentooController;
