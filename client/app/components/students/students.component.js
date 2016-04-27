import template from './students.html';
import './students.styl';

let studentsComponent = {
  template,
  controller: 'StudentsController',
  bindings: {
    students: '='
  }
};

export default studentsComponent;