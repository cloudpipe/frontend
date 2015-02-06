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
  createdAt: DS.attr('pipedate'),
  startedAt: DS.attr('pipedate'),
  finishedAt: DS.attr('pipedate'),
  status: DS.attr('string'),
  runtime: DS.attr('nanoduration'),
  queueDelay: DS.attr('nanoduration'),
  overheadDelay: DS.attr('nanoduration'),
  stdout: DS.attr('string'),
  stderr: DS.attr('string'),
  cmd: DS.attr('string'),
  core: DS.attr('string'),
  multicore: DS.attr('number'),
  resultType: DS.attr('string'),
  maxRuntime: DS.attr('nanoduration'),

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
