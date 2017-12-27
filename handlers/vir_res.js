'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))
const logging = require(path.join(__dirname, '../logging.js'));

const LOG = logging.getLogger(__filename);

const Start = Math.round(Date.now()/1000);
const OneDayM = 24*60;
const OneDayS = OneDayM*60;
const OneDayMS = OneDayS*1000;
const CacheCapacity = OneDayM+90;

class VirRes {
  constructor() {
    this._last = {timestamp: Start-OneDayS};
    this._cachedData = [];

    setInterval(() => {
      if(this._cachedData.length > CacheCapacity) {
        this._cachedData.splice(0
            , this._cachedData.length-CacheCapacity);
      }
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

// virtual resource
class Resource extends VirRes {
  _parse(ret) {
    return new Promise((resolve, reject) => {
      if(ret.data.length > 0) {
        this._last = ret.data[ret.data.length - 1];
      }
      resolve(this._last);
    });
  }

  getVirResource(callback) {
    this.data('vir_resource'
        , `timestamp>${this._last.timestamp}`
        , callback);
  }
}
const virResource = new Resource();
exports.getVirResource = (callback) => {
  virResource.getVirResource(callback);
}

// virtual resource usage
class ResourceUsage extends VirRes {
  _parse(ret) {
    let [range] = ret.params;
    return new Promise((resolve, reject) => {
      if(ret.data.length > 0) {
        this._last = ret.data[ret.data.length - 1];
        this._cachedData = this._cachedData.concat(ret.data);
      }
      resolve({
        length: range,
        data: this._cachedData.slice(-range)
      });
    });
  }

  getVirResourceUsage(range, callback) {
    this.data('vir_res_status'
        , `timestamp>${this._last.timestamp}`
        , callback
        , range);
  }
}
const virResourceUsage = new ResourceUsage();
exports.getVirResourceUsage = (range, callback) => {
  virResourceUsage.getVirResourceUsage(range, callback);
}

