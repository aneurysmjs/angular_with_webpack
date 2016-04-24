class JentooService {

   constructor($q, $firebaseArray) {
      this.$q = $q;
      this.ref = new Firebase('https://olgah.firebaseio.com/users/');
      this.olgah = $firebaseArray(this.ref);
      this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);
   }

   getStudents() {
      return this.$q((resolve, reject) => {
         resolve(this.olgah);
      });
   }

   getStudent(id) {

      let student = {};

      return this.$q((resolve, reject) => {
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
