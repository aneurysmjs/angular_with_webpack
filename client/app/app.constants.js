import angular from 'angular';

let constantsModule = angular.module('app.constants', [])
   .constant('FIRE_URL', 'https://olgah.firebaseio.com/');

export default constantsModule;