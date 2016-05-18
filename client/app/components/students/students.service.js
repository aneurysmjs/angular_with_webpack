import Firebase from 'firebase';

let _$q = new WeakMap(),
    _$firebaseArray = new WeakMap(),
    _studentsRef = new WeakMap();

class JentooService {

   constructor($q, $firebaseArray, FIRE_URL) {
      _$q.set(this, $q);

      //let ref = new Firebase('https://olgah.firebaseio.com/users/');

      _$firebaseArray.set(this, $firebaseArray);
      _studentsRef.set(this, new Firebase(FIRE_URL + 'users'));

      //this.olgah = $firebaseArray(ref);
      //this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);
   }

   getStudents() {
      let $firebaseArray = _$firebaseArray.get(this),
          studentsRef = _studentsRef.get(this);

      return $firebaseArray(studentsRef);
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

JentooService.$inject = ['$q', '$firebaseArray', 'FIRE_URL'];

export default JentooService;
