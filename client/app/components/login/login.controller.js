class LoginController {

   constructor(LoginService) {
      this.LoginService = LoginService;
      this.name = 'login';
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
      }, error => {
         console.log('error');
         console.log(error);
         this.error = error;
      }, {
         remember: "sessionOnly"
      });
   }

}

LoginController.$inject = ['LoginService'];

export default LoginController;