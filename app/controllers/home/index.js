import Ember from 'ember';

var isRunning = {
  waiting: true,
  queued: true,
  processing: true,
  done: false,
  error: false,
  killed: false,
  stalled: false,
}

export default Ember.ArrayController.extend({
  ongoing: function() {
    return this.get('model').filterBy('isRunning');
  }.property('model'),

  completed: function() {
    return this.get('model').filterBy('isComplete');
  }.property('model'),
});
