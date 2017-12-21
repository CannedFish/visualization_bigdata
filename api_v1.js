'use strict';

const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.send('You are calling API whose version is v1')
});

router.get('/hostStatus', (req, res) => {
  console.log('/hostStatus');
  res.send({
    good: 23,
    bad: 23,
    bad_monthly: 231,
    bad_until_now: 1283
  });
});

router.get('/:cluster/resource', (req, res) => {
  console.log('/:cluster/resource');
  res.send({
    cluster: req.clusterId,
    nodes: 123,
    cores: 234,
    memory: 213093483,
    disk: 238492801298
  });
});

router.get('/:cluster/resource/usage', (req, res) => {
  let range = parseInt(req.query.range) || 30;
  console.log('/:cluster/resource/usage', req.query.range, range);
  res.send({
    cluster: req.clusterId,
    length: range,
    data: [...Array(range).keys()].map((i) => {
      return {
        timestamp: 1232349827340,
        cpu_percent: 0.3,
        mem_used: 1231249,
        disk_used: 92840938,
        disk_input: 12381,
        disk_output: 1892324,
        net_input: 23942,
        net_output: 2309840923,
        health: 0
      }
    }) 
  });
});

router.get('/:cluster/serviceStatus', (req, res) => {
  console.log('/:cluster/serviceStatus');
  res.send({
    cluster: req.clusterId,
    length: 3,
    data: [...Array(3).keys()].map((i) => {
      return {
        name: 'service_name_' + i,
        status: 0
      }
    })
  });
});

router.get('/:cluster/serviceStatus/history', (req, res) => {
  let range = parseInt(req.query.range) || 30;
  console.log('/:cluster/serviceStatus/history');
  res.send({
    cluster: req.clusterId,
    length: range,
    data: [...Array(range).keys()].map((i) => {
      return {
        timestamp: 123129432094,
        service_name: 'service_name_' + i,
        health: 0
      }
    })
  });
});

let dataStatusHandler = [
  (range) => {
    let r = range || 24;
    return {
      cluster: 0,
      length: r,
      data: [...Array(r).keys()].map((i) => {
        return {
          timestamp: 1239239320,
          volume: 1238.1
        }
      })
    }
  },
  (range) => {
    let r = range || 24;
    return {
      cluster: 1,
      length: r,
      data: [...Array(r).keys()].map((i) => {
        return {
          timestamp: 1239239320,
          volume_in: 12338.1,
          volume_out: 1238.1
        }
      })
    }
  },
  (range) => {
    let r = range || 1;
    return {
      cluster: 2,
      length: r,
      data: [...Array(r).keys()].map((i) => {
        return {
          timestamp: 1239239320,
          record: 12381
        }
      })
    }
  }
]

router.get('/:cluster/dataStatus', (req, res) => {
  console.log('/:cluster/dataStatus');
  res.send(dataStatusHandler[req.clusterId](parseInt(req.query.range)));
});

router.get('/virtualResource', (req, res) => {
  console.log('/virtualResource');
  res.send({
    vcores: 123,
    vmems: 3242351,
    hdfs_capacity: 23498912840
  });
});

router.get('/virtualResource/usage', (req, res) => {
  let range = parseInt(req.query.range) || 30;
  console.log('/virtualResource/usage');
  res.send({
    length: range,
    data: [...Array(range).keys()].map((i) => {
      return {
        timestamp: 1238903248,
        vcores_used: 32,
        vmems_used: 320920,
        hdfs_used: 123809148
      }
    })
  });
});

router.get('/users/statistic', (req, res) => {
  console.log('/users/statistic');
  res.send({
    timestamp: 123849302842,
    length: 2,
    data: [...Array(2).keys()].map((i) => {
      return {
        user: 'user_' + i,
        vcores_seconds: 23234,
        mem_used: 392123,
        during_time: 12332423,
        jobs: 34
      }
    })
  });
});

// Middlewares
router.param('cluster', (req, res, next, cluster) => {
  let clusterId = parseInt(cluster);
  if(clusterId > 2 || clusterId < 0) {
    res.status(404).send(`Cluster ${cluster} is not exist`);
  } else {
    req.clusterId = clusterId;
    next();
  }
});

module.exports = router;

