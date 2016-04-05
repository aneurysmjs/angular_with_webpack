import template from './users.html';
import controller from './users.controller';
import './users.styl';

let usersComponent = function () {
   return {
      restrict: 'E',
      scope: {},
      template,
      controller,
      controllerAs: 'usersCtrl',
      bindToController: true
   };
};

export default usersComponent;
