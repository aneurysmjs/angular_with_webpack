module.exports = function (ngModule) {

   ngModule.directive('jentoo', function () {
      return {
         restrict: 'E',
         scope: {},
         controller: function () {
            var self = this;
            self.title = 'Jentoo';
         },
         controllerAs: 'jentooCtrl',
         templateUrl: 'components/jentoo.html'
      }
   });

};