import angular from 'angular';

import AuthInterceptor from './auth/auth.interceptor.service';
import AuthToken from './auth/auth.token.service';
import AuthService from './auth/auth.service';

let servicesModule = angular.module('app.shared.services', [])
   .service('AuthInterceptor', AuthInterceptor)
   .service('AuthToken', AuthToken)
   .service('AuthService', AuthService);

export default servicesModule;