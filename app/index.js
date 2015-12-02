/*
const angular = require('angular'),
      ngModule = angular.module('app', []);

require('./components')(ngModule);*/

import angular from 'angular';
import components from './components/index.js';

const ngModule = angular.module('app', []);

components(ngModule);

