import DS from 'ember-data';
/* global moment */

// 2014-01-02 16:17:18.000
var dateFormat = 'YYYY-MM-DD HH:mm:ss.SSS';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return moment(serialized, dateFormat);
  },

  serialize: function(deserialized) {
    return deserialized.format(dateFormat);
  }
});
