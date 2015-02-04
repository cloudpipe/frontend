import Ember from 'ember';
// import Session from '../../../models/session';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      var
        self = this,
        payload = { accountName: this.get("accountName"), password: this.get("password") };

      Ember.$.post("/v1/keys", payload).then(function (key) {
        var session = self.store.createRecord('session', {
          accountName: payload.accountName,
          apiKey: key,
        });

        console.log("Started session: " + key);
      });
    }
  }
});
