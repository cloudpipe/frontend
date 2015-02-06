import DS from 'ember-data';

var runningStatus = {
  waiting: true,
  queued: true,
  processing: true,
  done: false,
  error: false,
  killed: false,
  stalled: false,
};

var successfulStatus = {
  done: true,
  error: false,
  killed: false,
  stalled: false,
};

export default DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('string'),
  startedAt: DS.attr('string'),
  finishedAt: DS.attr('string'),
  status: DS.attr('string'),
  runtime: DS.attr('number'),
  queueDelay: DS.attr('number'),
  overheadDelay: DS.attr('number'),
  stdout: DS.attr('string'),
  stderr: DS.attr('string'),
  cmd: DS.attr('string'),
  core: DS.attr('string'),
  multicore: DS.attr('number'),
  resultType: DS.attr('string'),
  maxRuntime: DS.attr('number'),

  isRunning: function() {
    return runningStatus[this.get('status')];
  }.property('status'),

  isComplete: function() {
    return !runningStatus[this.get('status')];
  }.property('status'),

  wasSuccessful: function () {
    return successfulStatus[this.get('status')];
  }.property('status')
});
