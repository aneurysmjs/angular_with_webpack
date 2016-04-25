class LoginController {

   constructor(LoginService) {
      this.LoginService = LoginService;
      this.name = 'login';
   }

   createUser() {
      this.message = null;
      this.error = null;

      this.LoginService.$createUser({
         email: this.user.email,
         password: this.user.password
      }).then(userData => {
         this.message = "User created with uid: " + userData.uid;
      }).catch(error => {
         this.error = error;
      });

   };

}

LoginController.$inject = ['LoginService'];

export default LoginController;