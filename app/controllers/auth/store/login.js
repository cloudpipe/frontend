import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'home',

  actions: {
    login: function() {
      var
        self = this,
        homeController = this.get("controllers.home"),
        payload = { accountName: this.get("accountName"), password: this.get("password") },
        rememberMe = this.get("rememberMe");

      Ember.$.post("/v1/keys", payload).then(function (key) {
        var session = self.store.createRecord('session', {
          accountName: payload.accountName,
          apiKey: key,
        });

        session.storeOn(rememberMe ? localStorage : sessionStorage);
        homeController.set("model", session);

        self.transitionToRoute("home");
      });
    }
  }
});
