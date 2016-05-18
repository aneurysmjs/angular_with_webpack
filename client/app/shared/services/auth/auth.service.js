import Firebase from 'firebase';

class AuthService {

   constructor($firebaseAuth, FIREBASE_URL) {

      let ref = new Firebase(FIREBASE_URL);

      return $firebaseAuth(ref);

   }

}

AuthService.$inject = ['$firebaseAuth', 'FIREBASE_URL'];

export default AuthService;