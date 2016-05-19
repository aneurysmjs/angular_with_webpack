class LoginRegisterController {

   constructor(LoginService, $state, $timeout) {
      this.LoginService = LoginService;
      this.$state = $state;
      this.$timeout = $timeout;
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

   }

   goBack() {
      this.$state.go('^');
   }

   hideErrors() {
      if (this.error) {
         this.error = '';
      }
   }

}

LoginRegisterController.$inject = ['LoginService', '$state', '$timeout'];

export default LoginRegisterController;