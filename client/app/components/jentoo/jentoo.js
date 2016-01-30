var angular = require('angular');
var jentooComponent = require('./jentoo.component');

var jentooModule = angular.module('jentoo', [])
   .config(function ($stateProvider, $urlRouterProvider) {

      //$urlRouterProvider.otherwise('/');

      $stateProvider
         .state('jentoo', {
            url: '/jentoo',
            template: '<jentoo></jentoo>'
         });
   })

.directive('jentoo', jentooComponent);

module.exports = jentooModule;