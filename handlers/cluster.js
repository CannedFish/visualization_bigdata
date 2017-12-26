'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))
const logging = require(path.join(__dirname, '../logging.js'));

const LOG = logging.getLogger(__filename);

const Start = Math.round(Date.now()/1000);
const OneDayMS = 60*60*60;

class Cluster {
  constructor() {
    this._last = {
      0: {timestamp: Start-OneDayMS},
      1: {timestamp: Start-OneDayMS},
      2: {timestamp: Start-OneDayMS}
    };
    this._cachedData = [];
  }

  data(clusterId, table, where, callback) {
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
      return this._parse({id: clusterId, data: ret.data});
    }).then((ret) => {
      callback(null, ret);
    }).catch((err) => {
      LOG.error(err);
      callback(err);
    });
  }

  _parse() {
    throw new Error('Not implemented');
  }
}

// cluster resource
class Resource extends Cluster {
  _parse(ret) {
    return new Promise((resolve, reject) => {
      if(ret.data.length > 0) {
        this._last[ret.clusterId] = ret.data[ret.data.length - 1];
      }
      resolve({
        cluster: this._last[ret.clusterId].cluster,
        nodes: this._last[ret.clusterId].nodes,
        cores: this._last[ret.clusterId].cores,
        memory: this._last[ret.clusterId].memory,
        disk: this._last[ret.clusterId].disk
      });
    });
  }

  getClusterResource(clusterId, callback) {
    this.data(clusterId
        , 'cluster_resource'
        , `timestamp>${this._last[clusterId].timestamp} and cluster=${clusterId}`
        , callback);
  }
}
const clusterResource = new Resource();
exports.getClusterResource = (clusterId, callback) => {
  clusterResource.getClusterResource(clusterId, callback)
};

// cluster resource usage
exports.getClusterResourceUsage = (clusterId) => {};

exports.getClusterServiceStatus = (clusterId) => {};

exports.getClusterServiceStatusHistory = (clusterId) => {};

exports.getClusterDataStatus = (clusterId) => {};

