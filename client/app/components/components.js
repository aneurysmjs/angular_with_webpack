var angular = require('angular');
var Jentoo = require('./jentoo/jentoo');

var componentModule = angular.module('app.components', [
   Jentoo.name
]);

module.exports = componentModule;