import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    var session = this.controllerFor('home').get('model');
    if (!session) {
      this.transitionTo("auth");
    }
  }
});
