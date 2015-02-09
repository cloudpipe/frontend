import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('session', 'Session', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it persists itself in local or sessionStorage', function () {
  var model = this.subject({
    accountName: 'me@gmail.com',
    apiKey: '12345'
  });

  var mock = {
    setItem: function (key, item) { mock[key] = item; }
  };

  model.storeOn(mock);

  strictEqual(mock.accountName, 'me@gmail.com');
  strictEqual(mock.apiKey, '12345');
});

test('it reconstitutes itself from local or sessionStorage', function () {
  var model = this.subject();

  var mock = {
    accountName: 'myself@blah.com',
    apiKey: '54321',
    getItem: function(key) {
      return mock[key];
    }
  };

  Ember.run(function () {
    model.loadFrom(mock);
  });

  strictEqual(model.get('accountName'), 'myself@blah.com');
  strictEqual(model.get('apiKey'), '54321');
});

test('it knows if it can be loaded from a specific storage', function () {
  var model = this.subject();

  var hasSession = {
    accountName: 'myself@blah.com',
    apiKey: '54321',
    getItem: function(key) {
      return hasSession[key];
    }
  };

  ok(model.isIn(hasSession));
});

test("it knows if it isn't stored in a specific storage", function () {
  var model = this.subject();

  var noSession = {
    getItem: function(key) { return null; }
  };

  ok(!model.isIn(noSession));
});
