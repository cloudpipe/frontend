import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';
/* global moment */

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

test('it computes the humanized runtime duration', function() {
  var
    controller = this.subject(),
    job = MockJob.create({runtime: moment.duration(60000)});

  controller.set('model', job);

  strictEqual(controller.get('runtime'), 'a minute');
});

test('it formats the completion timestamp', function() {
  var
    controller = this.subject(),
    job = MockJob.create({finishedAt: moment('2013-02-08 09:30:26')});

  controller.set('model', job);

  strictEqual(controller.get('finishedAt'), 'Feb 8 2013 9:30:26am');
});
