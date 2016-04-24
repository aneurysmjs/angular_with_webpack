class JentooService {

   constructor($firebaseObject, $firebaseArray) {
      this.$firebaseArray = $firebaseArray;
      this.ref = new Firebase('https://olgah.firebaseio.com/users');
      this.olgah = this.$firebaseArray(this.ref);
   }

   getStudents() {
     this.olgah.$loaded().then(this.successHandler).catch(this.catchHandler);
   }


   successHandler(e) {

      console.log('e');
      console.log(e);


      //console.log("loaded record:", obj.$id, obj.someOtherKeyInData);
      console.log("loaded record:");

      self.olgah.forEach(student => {
         console.log('student');
         console.log(student);
      });
      // To iterate the key/value pairs of the object, use angular.forEach()
      /* angular.forEach(obj, function(value, key) {
       console.log(key, value);
       });*/

      return e;

   }

   catchHandler(error) {
      console.log('error');
      console.log(error);
   }

}

JentooService.$inject = ['$firebaseObject', '$firebaseArray'];

export default JentooService;
