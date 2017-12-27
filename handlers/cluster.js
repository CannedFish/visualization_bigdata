'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))
const logging = require(path.join(__dirname, '../logging.js'));

const LOG = logging.getLogger(__filename);

const Start = Math.round(Date.now()/1000);
const OneDayM = 24*60;
const OneDayS = OneDayM*60;
const OneDayMS = OneDayS*1000;
const CacheCapacity = OneDayM+30;

class Cluster {
  constructor() {
    this._last = {
      0: {timestamp: Start-OneDayS},
      1: {timestamp: Start-OneDayS},
      2: {timestamp: Start-OneDayS}
    };
    this._cachedData = {0:[], 1:[], 2:[]};

    setInterval(() => {
      [0, 1, 2].map((i) => {
        if(this._cachedData[i].length > CacheCapacity) {
          this._cachedData[i].splice(0
              , this._cachedData[i].length-CacheCapacity);
        }
      });
    }, OneDayMS)
  }

  data(table, where, callback) {
    let params = [].slice.call(arguments, 3);
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
      return this._parse({params: params, data: ret.data});
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
      let clusterId = ret.perms[0];
      if(ret.data.length > 0) {
        this._last[clusterId] = ret.data[ret.data.length - 1];
      }
      resolve({
        cluster: this._last[clusterId].cluster,
        nodes: this._last[clusterId].nodes,
        cores: this._last[clusterId].cores,
        memory: this._last[clusterId].memory,
        disk: this._last[clusterId].disk
      });
    });
  }

  getClusterResource(clusterId, callback) {
    this.data('cluster_resource'
        , `timestamp>${this._last[clusterId].timestamp} and cluster=${clusterId}`
        , callback
        , clusterId);
  }
}
const clusterResource = new Resource();
exports.getClusterResource = (clusterId, callback) => {
  clusterResource.getClusterResource(clusterId, callback)
};

// cluster resource usage
class ResourceUsage extends Cluster {
  _parse(ret) {
    return new Promise((resolve, reject) => {
      let [clusterId, range] = ret.params;
      if(ret.data.length > 0) {
        this._last[clusterId] = ret.data[ret.data.length - 1];
        this._cachedData[clusterId] = this._cachedData[clusterId].concat(ret.data);
      }
      resolve({
        cluster: clusterId,
        length: range,
        data: this._cachedData[clusterId].slice(-range)
      });
    });
  }

  getClusterResourceUsage(clusterId, range, callback) {
    this.data('cluster_status'
        , `timestamp>${this._last[clusterId].timestamp} and cluster=${clusterId}`
        , callback
        , clusterId
        , range);
  }
}
const clusterResourceUsage = new ResourceUsage();
exports.getClusterResourceUsage = (clusterId, range, callback) => {
  clusterResourceUsage.getClusterResourceUsage(clusterId, range, callback);
};

// cluster service status
class ServiceStatus extends Cluster {
  _parse(ret) {
    let [clusterId, range] = ret.params;
    return new Promise((resolve, reject) => {
      if(ret.data.length > 0) {
        this._last[clusterId] = ret.data[ret.data.length - 1];
        this._cachedData[clusterId] = this._cachedData[clusterId].concat(ret.data);
      }
      resolve((typeof(range) === 'undefined')
          ? this._status(clusterId)
          : this._statusHistory(clusterId, range));
    });
  }

  _status(clusterId) {
    let state = {};
    this._cachedData[clusterId].slice(-20).map((obj) => {
      state[obj.service_name] = obj.health;
    });
    let data = Object.keys(state).map((k) => {
      return {
        name: k,
        status: state[k]
      };
    });
    return {
      cluster: clusterId,
      length: data.length,
      data: data
    };
  }

  _statusHistory(clusterId, range) {
    return {
      cluster: clusterId,
      length: range,
      data: this._cachedData[clusterId].slice(-range)
    };
  }

  getClusterServiceStatus(clusterId, callback) {
    this.data('service_status'
        , `timestamp>${this._last[clusterId].timestamp} and cluster=${clusterId}`
        , callback
        , clusterId);
  }

  getClusterServiceStatusHistory(clusterId, range, callback) {
    this.data('service_status'
        , `timestamp>${this._last[clusterId].timestamp} and cluster=${clusterId}`
        , callback
        , clusterId
        , range);
  }
}
const clusterServiceStatus = new ServiceStatus();
exports.getClusterServiceStatus = (clusterId, callback) => {
  clusterServiceStatus.getClusterServiceStatus(clusterId, callback);
};
exports.getClusterServiceStatusHistory = (clusterId, range, callback) => {
  clusterServiceStatus.getClusterServiceStatusHistory(clusterId, range, callback);
};

// cluster data status
class DataStatus extends Cluster {
  _parse(ret) {
    let [clusterId, range] = ret.params;
    return new Promise((resolve, reject) => {
      if(ret.data.length > 0) {
        this._last[clusterId] = ret.data[ret.data.length - 1];
        this._cachedData[clusterId] = this._cachedData[clusterId].concat(ret.data);
      }
      resolve({
        cluster: clusterId,
        length: range,
        data: this._cachedData[clusterId].slice(-range)
      });
    });
  }

  getDataCollectVolume(range, callback) {
    let clusterId = 0;
    this.data('data_collector_volume'
        , `timestamp>${this._last[clusterId].timestamp}`
        , callback
        , clusterId
        , range);
  }

  getMsgQueueVolume(range, callback) {
    let clusterId = 1;
    this.data('msg_queue_volume'
        , `timestamp>${this._last[clusterId].timestamp}`
        , callback
        , clusterId
        , range);
  }

  getDataStatistics(range, callback) {
    let clusterId = 2;
    this.data('data_statistics'
        , `timestamp>${this._last[clusterId].timestamp}`
        , callback
        , clusterId
        , range);
  }
}
const clusterDataStatus = new DataStatus();
exports.getDataCollectVolume = (range, callback) => {
  clusterDataStatus.getDataCollectVolume(range, callback);
};
exports.getMsgQueueVolume = (range, callback) => {
  clusterDataStatus.getMsgQueueVolume(range, callback);
}
exports.getDataStatistics = (range, callback) => {
  clusterDataStatus.getDataStatistics(range, callback);
}

