var angular = require('angular');
var uiRouter = require('angular-ui-router');
var Components = require('./components/components');
var AppComponent = require('./app.component');

angular.module('app', [
   uiRouter,
   Components.name
])

.directive('app', AppComponent);