export default {
   documentTypes: ['TI', 'CC', 'PAS'],
   occupations: ['dependiente', 'independiente', 'estudiante'],
   plans: ['cuarzo', 'rubí', 'záfiro', 'esmeralda', 'turqueza', 'diamante'],
   dateOptions: {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
   },
   altInputFormats: ['M!/d!/yyyy'],
   formats: ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'],
   format: function (n) {
      return this.formats[n];
   },
   popup: {
      opened: false
   },
   inlineOptions: {
      //customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
   },
   isUpdate: false
};