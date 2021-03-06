'use strict';

const path = require('path');
const http = require('http');

const config = require(path.join(__dirname, 'config.js'));
const logging = require(path.join(__dirname, './logging.js'));

const LOG = logging.getLogger(__filename);

const appHeaders = {
  'Content-Type': 'application/json',
  'Authorization': config.db_server_app_key
};

function doGet(reqPath, headers) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      host: config.db_server_host,
      port: config.db_server_port,
      path: reqPath,
      method: 'GET',
      headers: headers
    }, (res) => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      }).on('end', () => {
        resolve({
          status: res.statusCode,
          data: JSON.parse(data)
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
      LOG.error(`GET http://${config.db_server_host}:${config.db_server_port}${reqPath} ${err}`);
    })

    req.end()
    LOG.info(`GET http://${config.db_server_host}:${config.db_server_port}${reqPath}`);
  })
}

function doPost(reqPath, headers, reqData) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      host: config.db_server_host,
      port: config.db_server_port,
      path: reqPath,
      method: 'POST',
      headers: headers
    }, (res) => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
        console.log(`data received: ${chunk}`)
      }).on('end', () => {
        resolve({
          status: res.statusCode,
          data: JSON.parse(data)
        });
      });
    });

    req.on('error', (err) => {
      reject(err);
      LOG.error(`POST http://${config.db_server_host}:${config.db_server_port}${reqPath} ${err}`);
    })

    if(typeof(reqData) !== 'undefined') {
      req.write(JSON.stringify(reqData));
      console.log(`data sended: ${JSON.stringify(reqData)}`)
    }
    req.end();
    LOG.info(`POST http://${config.db_server_host}:${config.db_server_port}${reqPath}`);
  })
}

exports.getAllData = (table, where=null) => {
  return new Promise((resolve, reject) => {
    let url = '/data/'+table;
    if(where != null) {
      url += `?where=${new Buffer(where).toString('base64')}`
    }
    doGet(url, appHeaders).then((ret) => {
      if(ret.status != 200) {
        return reject(`Bad return code: ${ret.status}`);
      }

      return resolve(ret.data);
    }).catch((err) => {
      return reject(err);
    });
  })
}

exports.registerApp = (key, callback) => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': key
  };

  doPost('/register', headers, {
    app: config.db_server_app_name,
    description: "For displaying status of bigdata platform's status on a big screen."
  }).then((ret) => {
    console.log(`resolved data: ${ret.data.result}`)
    if(ret.data.result == 'ok') {
      return doPost('/key/'+config.db_server_app_name, headers)
    } else {
      throw new Error(ret.data.description)
    }
  }).then((ret) => {
    if(ret.data.result == 'ok') {
      callback(null, ret.data.key)
    } else {
      throw new Error(ret.data.description)
    }
  }).catch((err) => {
    callback(err)
  });
}

const tables = [
  'phy_health',
  'cluster_resource',
  'cluster_status',
  'vir_resource',
  'vir_res_status',
  'service_status',
  'data_collector_volume',
  'msg_queue_volume',
  'data_statistics',
  'user_statistics'
]
exports.privilege = (key, callback) => {
  let headers = {
    'Content-Type': 'application/json',
    'Authorization': key
  };

  doPost('/privilege/'+config.db_server_app_name, headers, {
    priv: tables.map((t) => {
      return {
        table: t,
        perms: [{
          column: "_all_",
          access: ["select", "update", "insert", "delete"]
        }]
      }
    })
  }).then((ret) => {
    if(ret.data.result == 'ok') {
      callback(null, tables)
    } else {
      throw new Error(ret.data.description)
    }
  }).catch((err) => {
    callback(err)
  });
}

