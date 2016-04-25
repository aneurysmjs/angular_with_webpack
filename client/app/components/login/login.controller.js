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
      })
      .then(authData =>  {
         console.log('authData');
         console.log(authData);
         this.authData = authData;
      }).catch(function (error) {
         this.error = error;
      });
   }


}

LoginController.$inject = ['LoginService'];

export default LoginController;