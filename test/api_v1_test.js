'use strict';

const assert = require('assert');
const path = require('path');
const http = require('http');

function httpCall(reqPath, method='GET') {
  return new Promise((resolve, reject) => {
    const req = http.request({
      host: '127.0.0.1',
      port: 39605,
      path: '/api/v1' + reqPath,
      method: method,
      headers: {'Content-Type': 'application/json'}
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
    })

    req.end()
  })
}

describe('/api/v1', () => {
  let p1 = '/hostStatus';
  describe(p1, () => {
    it('should return status 200', (done) => {
      httpCall(p1).then((ret) => {
        assert.equal(ret.status, 200);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should has rigte properties', (done) => {
      httpCall(p1).then((ret) => {
        assert.equal(ret.data.hasOwnProperty('good'), true);
        assert.equal(ret.data.hasOwnProperty('bad'), true);
        assert.equal(ret.data.hasOwnProperty('bad_monthly'), true);
        assert.equal(ret.data.hasOwnProperty('bad_until_now'), true);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  let cluster = [0, 1, 2];
  cluster.map((cid) => {
    let p2 = `/${cid}/resource`;
    describe(p2, () => {
      it('should return status 200', (done) => {
        httpCall(p2).then((ret) => {
          assert.equal(ret.status, 200);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte properties', (done) => {
        httpCall(p2).then((ret) => {
          assert.equal(ret.data.hasOwnProperty('cluster'), true);
          assert.equal(ret.data.hasOwnProperty('nodes'), true);
          assert.equal(ret.data.hasOwnProperty('cores'), true);
          assert.equal(ret.data.hasOwnProperty('memory'), true);
          assert.equal(ret.data.hasOwnProperty('disk'), true);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte value', (done) => {
        httpCall(p2).then((ret) => {
          assert.equal(ret.data.cluster, cid);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  })

});

