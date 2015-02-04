import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('auth', function () {
    this.resource('auth.store', { path: 'store' }, function () {
      this.route('login');
    });
  });

  this.route('home');
});

export default Router;
