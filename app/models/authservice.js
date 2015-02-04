import DS from 'ember-data';

export default DS.Model.extend({
  style: DS.attr('string'),
  address: DS.attr('string')
});
