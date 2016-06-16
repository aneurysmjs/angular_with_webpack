function passwordMatch() {
   'use strict';

   return {
      restrict: 'A',
      scope: true,
      require: 'ngModel',
      link
   };

   function link(scope, elem , attrs, ngModelController) {

      function checker() {
         //get the value of the first password
         let e1 = scope.$eval(attrs.ngModel),
         //get the value of the other password
             e2 = scope.$eval(attrs.passwordMatch);
         console.log('--- passmatch ---');
         console.log(e1 === e2);
         return e1 == e2;
      }

      scope.$watch(checker, n => {
         console.log('--- match!!! ---');
         //set the form ngModelController to valid if both
         //passwords are the same, else invalid
         ngModelController.$setValidity("unique", n);
      });

   }

}

export default passwordMatch;