class LoginService {

   constructor($q, $firebaseAuth, FIRE_URL) {
      console.log('FIRE_URL');
      console.log(FIRE_URL);
   }

}

LoginService.$inject = ['$q', '$firebaseAuth', 'FIRE_URL'];

export default LoginService;