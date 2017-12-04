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
  console.log('/:cluster/resource/usage');
  res.send(`You are calling on ${req.originalUrl}`);
});

router.get('/:cluster/serviceStatus', (req, res) => {
  console.log('/:cluster/serviceStatus');
  res.send(`You are calling on ${req.originalUrl}`);
});

router.get('/:cluster/serviceStatus/history', (req, res) => {
  console.log('/:cluster/serviceStatus/history');
  res.send(`You are calling on ${req.originalUrl}`);
});

router.get('/:cluster/dataStatus', (req, res) => {
  console.log('/:cluster/dataStatus');
  res.send(`You are calling on ${req.originalUrl}`);
});

router.get('/virtualResource', (req, res) => {
  console.log('/virtualResource');
  res.send(`You are calling on ${req.originalUrl}`);
});

router.get('/virtualResource/usage', (req, res) => {
  console.log('/virtualResource/usage');
  res.send(`You are calling on ${req.originalUrl}`);
});

router.get('/users/statistic', (req, res) => {
  console.log('/users/statistic');
  res.send(`You are calling on ${req.originalUrl}`);
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

