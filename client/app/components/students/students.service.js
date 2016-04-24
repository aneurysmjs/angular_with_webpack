class JentooService {

   constructor($q, $firebaseArray) {
      this.ref = new Firebase('https://olgah.firebaseio.com/users');

      this.$q = $q;

      this.olgah = $firebaseArray(this.ref);
      this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);

      this.$firebaseArray = $firebaseArray;
      this.ref = new Firebase('https://olgah.firebaseio.com/users');
      this.olgah = this.$firebaseArray(this.ref);
   }

   getStudents() {

      console.log('this');
      console.log(this);

      return this.$q((resolve, reject) => {
         resolve(this.olgah);
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
