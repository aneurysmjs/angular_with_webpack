export default ngModule => {

   ngModule.directive('jentoo', () => {
      require('./jentoo.styl');
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