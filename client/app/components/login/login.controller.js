class LoginController {

   constructor(LoginService) {
      this.name = 'login';
   }

}

LoginController.$inject = ['LoginService'];

export default LoginController;