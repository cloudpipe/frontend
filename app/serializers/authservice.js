import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  // AuthService is a singular resource.
  extractArray: function(store, type, payload) {
    return [this.extractSingle(store, type, payload)];
  },

  extractSingle: function(store, type, payload) {
    payload.id = 0;
    return payload;
  },
});
