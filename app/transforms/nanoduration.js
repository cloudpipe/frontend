import DS from 'ember-data';
/* global moment */

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return moment.duration(serialized / 1e6);
  },

  serialize: function(deserialized) {
    return deserialized.milliseconds() * 1e6;
  }
});
