/* global require, module */

var
  mergeTrees = require('broccoli-merge-trees'),
  pickFiles = require('broccoli-static-compiler');

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  lessOptions: {
    paths: [
      'bower_components/bootstrap/less',
      'bower_components/fontawesome/less'
    ]
  }
});

// Bootstrap
app.import('bower_components/bootstrap/dist/js/bootstrap.js');

// Moment
app.import('bower_components/moment/moment.js');
app.import('vendor/moment-precise-range/readable-range.js');

// FontAwesome
var fontTree = pickFiles('bower_components/fontawesome/fonts', {
  srcDir: '/',
  files: ['*'],
  destDir: '/fonts'
});

module.exports = mergeTrees([app.toTree(), fontTree]);
