'use strict';

const express = require('express');
const router = express.Router();
const path = require('path')

const host = require(path.join(__dirname, './handlers/host.js'))
const cluster = require(path.join(__dirname, './handlers/cluster.js'))
const vir = require(path.join(__dirname, './handlers/vir_res.js'))
const users = require(path.join(__dirname, './handlers/users.js'))

const logging = require(path.join(__dirname, './logging.js'));

const LOG = logging.getLogger(__filename);

// Routes
router.get('/', (req, res) => {
  res.send('You are calling API whose version is v1')
});

router.get('/hostStatus', (req, res) => {
  console.log('/hostStatus');
  /* @Return:
   *  {
   *    good: 23,
   *    bad: 23,
   *    bad_monthly: 231,
   *    bad_until_now: 1283
   *  }
   */
  host.getHostStatus((err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/:cluster/resource', (req, res) => {
  console.log('/:cluster/resource');
  /* @Return:
   * {
   *   cluster: req.clusterId,
   *   nodes: 123,
   *   cores: 234,
   *   memory: 213093483,
   *   disk: 238492801298
   * }
   */
  cluster.getClusterResource(req.clusterId, (err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/:cluster/resource/usage', (req, res) => {
  /* @Return:
   * {
   *    cluster: req.clusterId,
   *    length: range,
   *    data: [...Array(range).keys()].map((i) => {
   *      return {
   *        timestamp: 1232349827340,
   *        cpu_percent: 0.3,
   *        mem_used: 1231249,
   *        disk_used: 92840938,
   *        disk_input: 12381,
   *        disk_output: 1892324,
   *        net_input: 23942,
   *        net_output: 2309840923,
   *        health: 0
   *      }
   *    }) 
   *  }
   */
  let range = parseInt(req.query.range) || 30;
  console.log('/:cluster/resource/usage', req.query.range, range);
  cluster.getClusterResourceUsage(req.clusterId, range, (err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/:cluster/serviceStatus', (req, res) => {
  /* @Returns:
   * {
   *   cluster: req.clusterId,
   *   length: 3,
   *   data: [...Array(3).keys()].map((i) => {
   *     return {
   *       name: 'service_name_' + i,
   *       status: 0
   *     }
   *   })
   * }
   */
  console.log('/:cluster/serviceStatus');
  cluster.getClusterServiceStatus(req.clusterId, (err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/:cluster/serviceStatus/history', (req, res) => {
  /* @Returns:
   * {
   *   cluster: req.clusterId,
   *   length: range,
   *   data: [...Array(range).keys()].map((i) => {
   *     return {
   *       timestamp: 123129432094,
   *       service_name: 'service_name_' + i,
   *       health: 0
   *     }
   *   })
   * }
   */
  let range = parseInt(req.query.range) || 30;
  console.log('/:cluster/serviceStatus/history');
  cluster.getClusterServiceStatusHistory(req.clusterId, range, (err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

let dataStatusHandler = [
  (range, callback) => {
    /* @Returns:
     * {
     *   cluster: 0,
     *   length: r,
     *   data: [...Array(r).keys()].map((i) => {
     *     return {
     *       timestamp: 1239239320,
     *       volume: 1238.1
     *     }
     *   })
     * }
     */
    let r = range || 24;
    cluster.getDataCollectVolume(r, callback);
  },
  (range, callback) => {
    /*
     * @Returns:
     * {
     *   cluster: 1,
     *   length: r,
     *   data: [...Array(r).keys()].map((i) => {
     *     return {
     *       timestamp: 1239239320,
     *       volume_in: 12338.1,
     *       volume_out: 1238.1
     *     }
     *   })
     * }
     */
    let r = range || 24;
    cluster.getMsgQueueVolume(r, callback);
  },
  (range, callback) => {
    /*
     * @Returns:
     * {
     *   cluster: 2,
     *   length: r,
     *   data: [...Array(r).keys()].map((i) => {
     *     return {
     *       timestamp: 1239239320,
     *       record: 12381
     *     }
     *   })
     * }
     */
    let r = range || 1;
    cluster.getDataStatistics(r, callback);
  }
]

router.get('/:cluster/dataStatus', (req, res) => {
  console.log('/:cluster/dataStatus');
  dataStatusHandler[req.clusterId](parseInt(req.query.range), (err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/virtualResource', (req, res) => {
  /* @Returns:
   * {
   *   vcores: 123,
   *   vmems: 3242351,
   *   hdfs_capacity: 23498912840
   * }
   */
  console.log('/virtualResource');
  vir.getVirResource((err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/virtualResource/usage', (req, res) => {
  /* @Returns:
   * {
   *   length: range,
   *   data: [...Array(range).keys()].map((i) => {
   *     return {
   *       timestamp: 1238903248,
   *       vcores_used: 32,
   *       vmems_used: 320920,
   *       hdfs_used: 123809148
   *     }
   *   })
   * }
   */
  let range = parseInt(req.query.range) || 30;
  console.log('/virtualResource/usage');
  vir.getVirResourceUsage(range, (err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
  });
});

router.get('/users/statistic', (req, res) => {
  /* @Returns:
   * {
   *   timestamp: 123849302842,
   *   length: 2,
   *   data: [...Array(2).keys()].map((i) => {
   *     return {
   *       user: 'user_' + i,
   *       vcores_seconds: 23234,
   *       mem_used: 392123,
   *       during_time: 12332423,
   *       jobs: 34
   *     }
   *   })
   * }
   */
  console.log('/users/statistic');
  users.getUserStatistics((err, data) => {
    if(err) {
      res.status(500).end(err);
    }
    res.send(data);
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

