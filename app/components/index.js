//require('./devTools)(store); to import devTools from './devTools'; devTools(store);
import jentooComponent from './jentoo/jentoo.component';

export default ngModule => {
   //require('./jentoo/jentoo.component')(ngModule);
   jentooComponent(ngModule);
};