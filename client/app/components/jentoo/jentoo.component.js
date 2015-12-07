import template from './jentoo.html';
import controller from './jentoo.controller';
import './jentoo.styl';

let jentooComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'jentooCtrl',
    bindToController: true
  };
};

export default jentooComponent;
