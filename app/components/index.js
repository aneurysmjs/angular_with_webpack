// this is going to represent the folder, and so this folder can be required because we have an index.js.
module.exports = function (ngModule) {
   /*
   * this is a very modular approach, because we're not using the 'angular.module' getter all over the place.
   * We're passing the module where it needs to go so that things can be registered on it.
   * That makes things a lot more modular in the sense that you can move things around,
   * have them be registered on totally different modules, and you don't need to worry about changing
   * the module name that something is being registered on it, just has an API that accepts the module.
   */
   require('./jentoo.component')(ngModule);
};