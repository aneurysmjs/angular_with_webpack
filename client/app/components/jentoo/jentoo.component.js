var template = require('./jentoo.html');
var controller = require('./jentoo.controller');
require('./jentoo.styl');

var jentooComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template: template,
    controller: controller,
    controllerAs: 'jentooCtrl',
    bindToController: true
  };
};

module.exports = jentooComponent;