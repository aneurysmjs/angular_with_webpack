import Firebase from 'firebase';

class LoginService {

   constructor($q, $firebaseAuth, FIRE_URL) {

      let ref = new Firebase(FIRE_URL);

      return $firebaseAuth(ref);

   }

}

LoginService.$inject = ['$q', '$firebaseAuth', 'FIRE_URL'];

export default LoginService;