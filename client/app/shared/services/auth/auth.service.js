import Firebase from 'firebase';

class AuthService {

   constructor($firebaseAuth, FIRE_URL) {

      let ref = new Firebase(FIRE_URL);

      return $firebaseAuth(ref);

   }

}

AuthService.$inject = ['$firebaseAuth', 'FIRE_URL'];

export default AuthService;