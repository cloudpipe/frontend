import DS from 'ember-data';

export default DS.Model.extend({
  accountName: DS.attr('string'),
  apiKey: DS.attr('string'),

  // Persist this session within localStorage or sessionStorage.
  storeOn: function(storage) {
    storage.setItem('accountName', this.get('accountName'));
    storage.setItem('apiKey', this.get('apiKey'));
  },

  // Reconstitute this session from localStorage or sessionStorage.
  loadFrom: function(storage) {
    this.set('accountName', storage.getItem('accountName'));
    this.set('apiKey', storage.getItem('apiKey'));
  },

  // Determine whether or not a saved session is present within a given storage.
  isIn: function(storage) {
    return storage.getItem('accountName') && storage.getItem('apiKey');
  },

  // Remove an existing session from a given storage.
  removeFrom: function(storage) {
    storage.removeItem('accountName');
    storage.removeItem('apiKey');
  }
});
