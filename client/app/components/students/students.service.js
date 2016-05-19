import Firebase from 'firebase';

let _$q = new WeakMap(),
    _$firebaseArray = new WeakMap(),
    _$firebaseObject = new WeakMap(),
    _studentsRef = new WeakMap();

class JentooService {

   constructor($q, $firebaseArray, $firebaseObject, FIRE_URL) {
      _$q.set(this, $q);

      //let ref = new Firebase('https://olgah.firebaseio.com/users/');

      _$firebaseArray.set(this, $firebaseArray);
      _$firebaseObject.set(this, $firebaseObject);
      _studentsRef.set(this, new Firebase(FIRE_URL + 'users'));

      //this.olgah = $firebaseArray(ref);
      //this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);
   }

   getStudents() {
      let $firebaseArray = _$firebaseArray.get(this),
          studentsRef = _studentsRef.get(this);

      return $firebaseArray(studentsRef);
   }

   getStudent(uid) {
      let $firebaseObject = _$firebaseObject.get(this),
          studentsRef = _studentsRef.get(this);

      return $firebaseObject(studentsRef.child(uid));
   }

   successHandler(students) {

   }

   catchHandler(error) {
      console.log('error');
      console.log(error);
   }

}

JentooService.$inject = ['$q', '$firebaseArray', '$firebaseObject', 'FIRE_URL'];

export default JentooService;