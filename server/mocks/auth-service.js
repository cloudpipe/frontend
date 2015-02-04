module.exports = function(app) {
  var express = require('express');
  var authServiceRouter = express.Router();

  authServiceRouter.get('/', function(req, res) {
    res.send({
      'address': 'http://localhost:4200',
      'style': 'auth-store',
    });
  });

  authServiceRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  authServiceRouter.get('/:id', function(req, res) {
    res.send({
      'auth-service': {
        id: req.params.id
      }
    });
  });

  authServiceRouter.put('/:id', function(req, res) {
    res.send({
      'auth-service': {
        id: req.params.id
      }
    });
  });

  authServiceRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/v1/auth_service', authServiceRouter);
};
