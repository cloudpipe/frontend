import DS from 'ember-data';

export default DS.Model.extend({
  accountName: DS.attr('string'),
  apiKey: DS.attr('string'),
});
