module.exports = function(app) {
  var express = require('express');
  var keysRouter = express.Router();

  keysRouter.post('/', function(req, res) {
    res.send('1234567890987654321');
  });

  app.use('/v1/keys', keysRouter);
};
