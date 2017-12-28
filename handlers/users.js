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

class Users {
  constructor() {
    this._last = {timestamp: 0};
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

// user statistics
class Statistics extends Users {
  _parse(ret) {
    return new Promise((resolve, reject) => {
      if(ret.data.length > 0) {
        LOG.info(`Get ${ret.data.length} records of user statistics.`);
        this._last = ret.data[ret.data.length - 1];
        this._update(ret.data);
      }
      resolve(this._aggregate());
    });
  }

  _update(data) {
    data.map((d) => {
      if(typeof(this._cachedData[d.user]) === 'undefined') {
        this._cachedData[d.user] = {}
      }
      if(typeof(this._cachedData[d.user][d.job_id]) === 'undefined') {
        this._cachedData[d.user][d.job_id] = {
          vcore_seconds: 0,
          mem_used: 0,
          during_time: 0
        }
      }

      this._cachedData[d.user][d.job_id].vcore_seconds = d.vcore_seconds;
      this._cachedData[d.user][d.job_id].mem_used = d.memory_used;
      this._cachedData[d.user][d.job_id].during_time = d.during_time;
      this._cachedData[d.user][d.job_id].status = d.status;
    });
  }

  _aggregate() {
    let users = Object.keys(this._cachedData);
    return {
      timestamp: this._last.timestamp,
      length: users.length,
      data: users.map((user) => {
              let job_ids = Object.keys(this._cachedData[user]);
              let ret = {
                user: user,
                vcore_seconds: 0,
                mem_used: 0,
                during_time: 0,
                jobs: job_ids.length
              };

              for(let job of Object.values(this._cachedData[user])) {
                ret.vcore_seconds += job.vcore_seconds;
                ret.mem_used += job.mem_used;
                ret.during_time += job.during_time;
              }
              return ret;
            })
    };
  }

  getUserStatistics(callback) {
    this.data('user_statistics'
        , `timestamp>${this._last.timestamp}`
        , callback);
  }
}
const userStatistics = new Statistics();
exports.getUserStatistics = (callback) => {
  userStatistics.getUserStatistics(callback);
}

