const AuthStore = require('../stores/authentication.store');

module.exports = function(app) {
  app.use('/api/', require('./routes.unauth'));
//   app.use('/api/v1', [AuthStore.authenticate], require('./routes.auth'));
//   app.use('/api/v1/admin', [AuthStore.authenticate, AuthStore.isAdmin], require('./routes.admin'));
};