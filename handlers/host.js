'use strict';

const path = require('path')

const db = require(path.join(__dirname, '../db.js'))

let last = {timestamp: 0};
let cacheData = [];

function compaction() {
  let oldData = cacheData.slice(0, -30)
}

function monthly() {
  let monthlyData = cacheData.slice(-30);
  return monthlyData.reduce((a, b) => a+b);
}

function untilNow() {
}

exports.getHostStatus = (callback) => {
  db.getAllData('phy_health', `timestamp>${last.timestamp}`).then((ret) => {
    let sortedData = ret.data.sort((a, b) => {
      if(a.timestamp < b.timestamp) {
        return -1;
      }
      if(a.timestamp > b.timestamp) {
        return 1;
      }

      return 0;
    });
    cacheData.concat(sortedData);
    console.log(cacheData);

    last = cacheData[cacheData.length-1]
  }).catch((err) => {
    console.log(err);
    callback(err);
  })
}

