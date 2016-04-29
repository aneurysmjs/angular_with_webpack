import template from './studentCard.html';
import './studentCard.styl';

let studentCardComponent =  {
   template,
   controller: 'StudentCardController',
   bindings: {
      cards: '='
   }
};

export default studentCardComponent;
