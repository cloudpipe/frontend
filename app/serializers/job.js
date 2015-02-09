import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'jid',

  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  }
});
