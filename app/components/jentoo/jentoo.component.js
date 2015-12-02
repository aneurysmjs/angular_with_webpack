//require('./jentoo.styl');
//require('./jentoo.html');
import template from './jentoo.html';
import './jentoo.styl';

export default ngModule => {

   ngModule.directive('jentoo', () => {

      return {
         restrict: 'E',
         scope: {},
         controller: function () {
            var self = this;
            self.title = 'Jentoo';
         },
         controllerAs: 'jentooCtrl',
         template
      }

   });

};