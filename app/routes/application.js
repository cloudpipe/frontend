import Ember from 'ember';

export default Ember.Route.extend({

  // Load a saved session, if one is present.
  beforeModel: function () {
    var possible = this.store.createRecord('session');

    for (var storage of [sessionStorage, localStorage]) {
      if (possible.isIn(storage)) {
        possible.loadFrom(storage);
        this.controllerFor('home').set('model', possible);
        this.transitionTo('home');
        break;
      }
    }
  },

  actions: {
    logout: function () {
      var
        homeController = this.controllerFor('home'),
        existing = homeController.get('model');

      if (!existing) {
        return;
      }

      for (var storage of [sessionStorage, localStorage]) {
        existing.removeFrom(storage);
      }

      homeController.set('model', null);
      this.transitionTo('index');
    }
  }
});
