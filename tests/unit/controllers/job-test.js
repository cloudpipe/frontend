import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:job', 'JobController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

var MockJob = Ember.Object.extend({});

test('it capitalizes the job status', function() {
  var
    controller = this.subject(),
    job = MockJob.create({status: 'what'});

  controller.set('model', job);

  strictEqual(controller.get('status'), 'What');
});
