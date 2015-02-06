module.exports = function(app) {
  var express = require('express');
  var jobRouter = express.Router();

  jobRouter.get('/', function(req, res) {
    res.send({
      'jobs': [
        {
          "jid": 1,
          "name": "Ongoing",
          "created_at": "2015-02-06 13:19:50.000",
          "started_at": "2015-02-06 13:20:00.000",
          "status": "processing",
          "runtime": 6e9,
          "queue_delay": 10,
          "overhead_delay": 0,
          "stdout": "1... 2... 3... 4... 5...",
          "stderr": "",
          "cmd": "for i in {1..10} do; echo \"${i}... \"; wait 5; done",
          "core": "c1",
          "multicore": 1,
          "tags": {},
          "result_type": "binary",
          "max_runtime": 6000,
        },
        {
          "jid": 2,
          "name": "First",
          "created_at": "2015-02-06 13:00:00.000",
          "started_at": "2015-02-06 13:00:10.000",
          "finished_at": "2015-02-06 13:01:40.000",
          "status": "done",
          "runtime": 9e10,
          "queue_delay": 1e10,
          "overhead_delay": 0,
          "stdout": "complete",
          "stderr": "",
          "cmd": "wait 90 && echo 'complete'",
          "core": "c1",
          "multicore": 1,
          "tags": {},
          "result_type": "binary",
          "max_runtime": 6e11,
        },
        {
          "jid": 3,
          "name": "Second",
          "created_at": "2015-02-06 12:45:00.000",
          "started_at": "2015-02-06 12:46:00.000",
          "finished_at": "2015-02-06 12:47:00.000",
          "status": "done",
          "runtime": 6e10,
          "queue_delay": 1e9,
          "overhead_delay": 1e9,
          "stdout": "complete",
          "stderr": "",
          "cmd": "wait 60 && echo 'complete'",
          "core": "c1",
          "multicore": 1,
          "tags": {},
          "result_type": "binary",
          "max_runtime": 6e11,
        },
        {
          "jid": 4,
          "name": "Boom",
          "started_at": "2015-02-06 12:40:00.000",
          "created_at": "2015-02-06 12:40:00.000",
          "finished_at": "2015-02-06 12:40:05.000",
          "status": "error",
          "runtime": 5e9,
          "queue_delay": 0,
          "overhead_delay": 0,
          "stdout": "",
          "stderr": "boom!",
          "cmd": "echo 'boom!' >2 && exit 1",
          "core": "c1",
          "multicore": 1,
          "tags": {},
          "result_type": "binary",
          "max_runtime": 6e11,
        },
      ]
    });
  });

  app.use('/v1/job', jobRouter);
};
