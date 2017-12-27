'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))

const Start = Math.round(Date.now()/1000);
const OneDayS = 24*60*60;
const monthLength = 30;
let last = {
  timestamp: (Start-OneDayS),
  host_running: 0,
  host_down: 0
};
let cacheData = [];

function compaction() {
  if(cacheData.length > monthLength) {
    let oldData = cacheData.slice(0, -monthLength);
    cacheData.splice(0, oldData.length, {
      timestamp: oldData[oldData.length-1].timestamp,
      host_running: 0,
      host_down: oldData.map((i) => i.host_down).reduce((a, b) => a+b)
    })
  }
}

function monthly() {
  let monthlyData = cacheData.slice(-monthLength);
  return monthlyData.map((i) => i.host_down).reduce((a, b) => a+b);
}

function untilNow() {
  return cacheData.map((i) => i.host_down).reduce((a, b) => a+b);
}

exports.getHostStatus = (callback) => {
  db.getAllData('phy_health', `timestamp>${last.timestamp}`).then((ret) => {
    if(ret.data.length != 0) {
      ret.data.sort((a, b) => {
        if(a.timestamp < b.timestamp) {
          return -1;
        }
        if(a.timestamp > b.timestamp) {
          return 1;
        }

        return 0;
      });
      cacheData = cacheData.concat(ret.data);
      compaction();
      last = cacheData[cacheData.length-1];
    }

    callback(null, {
      good: last.host_running,
      bad: last.host_down,
      bad_monthly: monthly(),
      bad_until_now: untilNow()
    });
  }).catch((err) => {
    console.log(err);
    callback(err);
  })
}

