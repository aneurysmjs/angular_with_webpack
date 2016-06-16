let _$uibModalInstance = new WeakMap();

class StudentsModalModalController {

   constructor($uibModalInstance) {
      _$uibModalInstance.set(this, $uibModalInstance);
   }

   ok() {
      let $uibModalInstance = _$uibModalInstance.get(this);
      $uibModalInstance.close();

   }

   cancel() {
      let $uibModalInstance = _$uibModalInstance.get(this);
      $uibModalInstance.dismiss();
   }

}

StudentsModalModalController.$inject = ['$uibModalInstance'];

export default StudentsModalModalController;