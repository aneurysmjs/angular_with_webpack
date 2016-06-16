import angular from 'angular';

import passwordMatch from './password-match/password-match.directive.js';

let sharedModule = angular.module('app.shared.directives', [])
   .directive('passwordMatch', passwordMatch);

export default sharedModule;