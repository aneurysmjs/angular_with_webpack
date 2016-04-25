import angular from 'angular';

import passwordMatch from './passwordMatch/passwordMatch.directive';

let sharedModule = angular.module('app.shared.directives', [])
   .directive('passwordMatch', passwordMatch);

export default sharedModule;