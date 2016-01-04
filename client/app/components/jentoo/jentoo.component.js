import template from './jentoo.html';
import controller from './jentoo.controller';
import './jentoo.styl';

//var img = document.createElement('img');
//img.src = require('../../assets/img/blackend.jpeg');

console.log('--- template ---');
console.log(template);

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
