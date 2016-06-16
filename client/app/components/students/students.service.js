import Firebase from 'firebase';

class JentooService {

   constructor($q, $firebaseArray, $firebaseObject, FIRE_URL, studentsSetup) {
      this.studentsSetup = studentsSetup;
      this.$q = $q;
      this.$firebaseArray = $firebaseArray;
      this.$firebaseObject = $firebaseObject;
      this.studentsRef = new Firebase(FIRE_URL + 'users');
   }

   student() {
      let student = {};
      return (() => {
         student.documentType = this.studentsSetup.documentTypes[0];
         student.occupation = this.studentsSetup.occupations[0];
         student.plan = this.studentsSetup.plans[0];
         return student;
      })();
   }

   getStudents() {
      return this.$firebaseArray(this.studentsRef);
   }

   getStudent(uid) {
      return this.$firebaseObject(this.studentsRef.child(uid));
   }

}

JentooService.$inject = ['$q', '$firebaseArray', '$firebaseObject', 'FIRE_URL', 'studentsSetup'];

export default JentooService;