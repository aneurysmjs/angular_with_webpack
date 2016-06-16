import angular from 'angular';

import paginationFilter from './pagination/pagination.filter';

let servicesModule = angular.module('app.shared.filters', [])
   .filter('pagination', paginationFilter);

export default servicesModule;