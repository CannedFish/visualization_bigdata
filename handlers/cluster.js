'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))
const logging = require(path.join(__dirname, './logging.js'));

const LOG = logging.getLogger(__filename);

class Cluster {
  constructor() {
    this._last = {timestamp: 0};
  }

  data(table, where) {
    db.getAllData(table, where).then((ret) => {
      ret.data.sort((a, b) => {
        if(a.timestamp < b.timestamp) {
          return -1;
        }
        if(a.timestamp > b.timestamp) {
          return 1;
        }
        return 0;
      });
      return this._parse(ret.data);
    }).then((ret) => {
      // resolve
    }).catch((err) => {
      LOG.error(err);
    })
  }

  _parse() {
    throw new Error('Not implemented');
  }
}

class Resource extends Cluster {
  _parse(data) {
    return new Promise((resolve, reject) => {
      // handle sorted data
    });
  }

  getClusterResource(clusterId) {
    this.data('cluster_resource'
        , `timestamp>${this._last.timestamp} and cluster=${clusterId}`);
  }
}
clusterResource = new Resource();
exports.getClusterResource = clusterResource.getClusterResource;

exports.getClusterResourceUsage = (clusterId) => {};

exports.getClusterServiceStatus = (clusterId) => {};

exports.getClusterServiceStatusHistory = (clusterId) => {};

exports.getClusterDataStatus = (clusterId) => {};

