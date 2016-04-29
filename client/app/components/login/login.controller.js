class LoginController {

   constructor(LoginService, $state) {
      this.LoginService = LoginService;
      this.$state = $state;
      this.name = 'login';

      LoginService.$onAuth(function (au) {
         console.log('au');
         console.log(au);
      });

   }

   login() {

      this.authData = null;
      this.error = null;

      this.LoginService.$authWithPassword({
         email: this.user.email,
         password: this.user.password
      }).then(authData =>  {
         console.log('authData');
         console.log(authData);
         this.authData = authData;
         this.$state.go('students');
      }, error => {
         console.log('error');
         console.log(error);
         this.error = error;
      }, {
         remember: "sessionOnly"
      });
   }

}

LoginController.$inject = ['LoginService', '$state'];

export default LoginController;