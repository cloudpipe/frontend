import Ember from 'ember';

export default Ember.ArrayController.extend({
  ongoing: function() {
    return this.get('model').filterBy('isRunning');
  }.property('model'),

  completed: function() {
    return this.get('model').filterBy('isComplete');
  }.property('model'),
});
