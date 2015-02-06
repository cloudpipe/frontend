import DS from 'ember-data';

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
  maxRuntime: DS.attr('number')
});
