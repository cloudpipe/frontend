import Ember from 'ember';
/* global moment */

var dateFormat = 'MMM D YYYY h:mm:ssa';

var relativize = function (original) {
  if (original) { return original.preciseDiff(moment()); } else { return null; }
};

var formatted = function (original) {
  if (original) { return original.format(dateFormat); } else { return 'not yet'; }
};

export default Ember.ObjectController.extend({
  status: function() {
    return this.get('model.status').capitalize();
  }.property('model.status'),

  runtime: function() {
    return this.get('model.runtime').humanize();
  }.property('model.runtime'),

  finishedAt: function() {
    return formatted(this.get('model.finishedAt'));
  }.property('model.finishedAt'),

  finishedAgo: function() {
    return relativize(this.get('model.finishedAt'));
  }.property('model.finishedAt')
});
