let _LoginService = new WeakMap(),
    _$state = new WeakMap();

class LoginController {

   constructor(LoginService, $state) {
      _LoginService.set(this, LoginService);
      _$state.set(this, $state);


      LoginService.$onAuth(function (au) {
         console.log('au');
         console.log(au);
      });

   }

   login() {

      let LoginService = _LoginService.get(this),
          $state = _$state.get(this);

      this.authData = null;
      this.error = null;

      LoginService.$authWithPassword({
         email: this.user.email,
         password: this.user.password
      }).then(authData =>  {
         console.log('authData');
         console.log(authData);
         this.authData = authData;
         $state.go('students');
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