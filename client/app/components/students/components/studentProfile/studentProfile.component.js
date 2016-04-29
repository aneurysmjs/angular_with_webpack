import template from './studentProfile.html';
import './studentProfile.styl';

let studentProfileComponent =  {
   template,
   controller: 'StudentsController',
   bindings: {
      onProfile: '&'
   }
};

export default studentProfileComponent;
