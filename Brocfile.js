/* global require, module */

var pickFiles = require('broccoli-static-compiler');

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

// FontAwesome
var fontTree = pickFiles('bower_components/fontawesome/fonts', {
  srcDir: '/',
  files: ['*'],
  destDir: '/fonts'
});

module.exports = app.toTree(fontTree);
