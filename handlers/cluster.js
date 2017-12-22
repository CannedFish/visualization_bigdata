'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))

exports.getClusterResource = (clusterId) => {};

exports.getClusterResourceUsage = (clusterId) => {};

exports.getClusterServiceStatus = (clusterId) => {};

exports.getClusterServiceStatusHistory = (clusterId) => {};

exports.getClusterDataStatus = (clusterId) => {};

