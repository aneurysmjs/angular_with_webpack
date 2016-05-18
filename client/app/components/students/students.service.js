import Firebase from 'firebase';

let _$q = new WeakMap();

class JentooService {

   constructor($q, $firebaseArray) {
      _$q.set(this, $q);
      this.ref = new Firebase('https://olgah.firebaseio.com/users/');
      this.olgah = $firebaseArray(this.ref);
      this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);
   }

   getStudents() {
      let $q = _$q.get(this);
      return $q((resolve, reject) => {
         resolve(this.olgah);
      });
   }

   getStudent(id) {

      let student = {},
          $q = _$q.get(this);

      return $q((resolve, reject) => {
         student = this.olgah.$getRecord(id);
         resolve(student);
      });

   }


   successHandler(students) {

   }

   catchHandler(error) {
      console.log('error');
      console.log(error);
   }

}

JentooService.$inject = ['$q', '$firebaseArray'];

export default JentooService;
