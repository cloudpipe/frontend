import Ember from 'ember';

var Authenticator = Ember.Object.extend({
  // Route to render when authentication is required.
  loginRoute: Ember.required(String),
});

var AuthStoreAuthenticator = Authenticator.extend({
  loginRoute: 'store.login',
});

export default Ember.Route.extend({
  authenticatorMap: {
    'auth-store': AuthStoreAuthenticator,
  },

  model: function() {
    return this.store.find('authservice');
  },

  afterModel: function(authServices) {
    var authService = authServices.get('firstObject');

    if (!authService) {
      throw new Error("Authentication service not reported");
    }

    var authenticatorClass = this.get('authenticatorMap')[authService.get('style')];

    if (!authenticatorClass) {
      throw new Error("Unrecognized authentication style: " + authService.get('style'));
    }

    var authenticator = authenticatorClass.create({address: authService.address});

    this.transitionTo('auth.' + authenticator.loginRoute);
  },
});
