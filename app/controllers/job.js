import Ember from 'ember';

export default Ember.ObjectController.extend({
  status: function() {
    return this.get('model.status').capitalize();
  }.property('model.status')
});
