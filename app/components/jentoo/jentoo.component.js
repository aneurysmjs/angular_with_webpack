export default ngModule => {
   /*
    You don't need to worry about the templateCache or XHRs firing off to go get your templates.
    The way that this works is you simply require the file there.
    You're done. You do need to add a loader(raw-loader), but what's really nice about this is this makes things a lot more modular.

    We could move these two files anywhere together. This component would still work.
    We wouldn't have to change the templateUrl to be pointing to the correct place wherever you move the file.
    This is a huge win that Webpack gives us.
   */
   ngModule.directive('jentoo', () => {
      return {
         restrict: 'E',
         scope: {},
         controller: function () {
            var self = this;
            self.title = 'Jentoo';
         },
         controllerAs: 'jentooCtrl',
         template: require('./jentoo.html')
      }
   });

};