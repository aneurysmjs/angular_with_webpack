var template = require('./app.html');
require('./app.styl');

var appComponent = function() {
   return {
      template: template,
      restrict: 'E'
   };
};

module.exports = appComponent;