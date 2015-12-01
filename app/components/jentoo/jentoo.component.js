export default ngModule => {

   ngModule.directive('jentoo', () => {
      return {
         restrict: 'E',
         scope: {},
         controller: function () {
            var self = this;
            self.title = 'Jentoo';
         },
         controllerAs: 'jentooCtrl',
         templateUrl: 'components/jentoo/jentoo.html'
      }
   });

};