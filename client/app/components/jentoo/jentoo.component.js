import template from './jentoo.html';
import controller from './jentoo.controller.js';
import './jentoo.styl';

export default ngModule => {

   ngModule.directive('jentoo', () => {

      return {
         restrict: 'E',
         scope: {},
         controller,
         controllerAs: 'jentooCtrl',
         template
      }

   });

};