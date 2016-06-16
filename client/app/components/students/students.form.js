import template from './students-form.html';

class StudentsForm {

   constructor() {
      this.scope = {};
      this.template = template;
      this.transclude = true;
      this.name = 'ctrl';
      this.controller = '@';
      this.controllerAs = '$ctrl';
      this.bindToController = {
         auth: '<',
         student: '<',
         students: '<'
      };
   }

}

export default StudentsForm;