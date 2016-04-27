import angular from 'angular';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import dragular from 'dragular';
import angularfire from 'angularfire';


let appLibraries = angular.module('app.libraries', [
      ngAnimate,
      uiRouter,
      uiBootstrap,
      angularfire
   ]);

export default appLibraries;