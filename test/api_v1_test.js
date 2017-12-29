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
  });

  cluster.map((cid) => {
    let p3 = `/${cid}/resource/usage`;
    describe(p3, () => {
      it('should return status 200', (done) => {
        httpCall(p3).then((ret) => {
          assert.equal(ret.status, 200);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte properties', (done) => {
        httpCall(p3).then((ret) => {
          assert.equal(ret.data.hasOwnProperty('cluster'), true);
          assert.equal(ret.data.hasOwnProperty('length'), true);
          assert.equal(ret.data.hasOwnProperty('data'), true);
          assert.equal(typeof(ret.data.data), 'object');
          assert.equal(ret.data.data[0].hasOwnProperty('timestamp'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('cpu_percent'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('mem_used'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('disk_used'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('disk_input'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('disk_output'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('net_input'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('net_output'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('health'), true);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte value', (done) => {
        httpCall(p3).then((ret) => {
          assert.equal(ret.data.cluster, cid);
          assert.equal(ret.data.data.length, ret.data.length);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });

  cluster.map((cid) => {
    let p4 = `/${cid}/serviceStatus`;
    describe(p4, () => {
      it('should return status 200', (done) => {
        httpCall(p4).then((ret) => {
          assert.equal(ret.status, 200);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte properties', (done) => {
        httpCall(p4).then((ret) => {
          assert.equal(ret.data.hasOwnProperty('cluster'), true);
          assert.equal(ret.data.hasOwnProperty('length'), true);
          assert.equal(ret.data.hasOwnProperty('data'), true);
          assert.equal(typeof(ret.data.data), 'object');
          assert.equal(ret.data.data[0].hasOwnProperty('name'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('status'), true);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte value', (done) => {
        httpCall(p4).then((ret) => {
          assert.equal(ret.data.cluster, cid);
          assert.equal(ret.data.data.length, ret.data.length);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });

  cluster.map((cid) => {
    let p5 = `/${cid}/serviceStatus/history`;
    describe(p5, () => {
      it('should return status 200', (done) => {
        httpCall(p5).then((ret) => {
          assert.equal(ret.status, 200);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte properties', (done) => {
        httpCall(p5).then((ret) => {
          assert.equal(ret.data.hasOwnProperty('cluster'), true);
          assert.equal(ret.data.hasOwnProperty('length'), true);
          assert.equal(ret.data.hasOwnProperty('data'), true);
          assert.equal(typeof(ret.data.data), 'object');
          assert.equal(ret.data.data[0].hasOwnProperty('timestamp'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('service_name'), true);
          assert.equal(ret.data.data[0].hasOwnProperty('health'), true);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte value', (done) => {
        httpCall(p5).then((ret) => {
          assert.equal(ret.data.cluster, cid);
          assert.equal(ret.data.data.length, ret.data.length);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });

  cluster.map((cid) => {
    let p6 = `/${cid}/dataStatus`;
    describe(p6, () => {
      it('should return status 200', (done) => {
        httpCall(p6).then((ret) => {
          assert.equal(ret.status, 200);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte properties', (done) => {
        httpCall(p6).then((ret) => {
          assert.equal(ret.data.hasOwnProperty('cluster'), true);
          assert.equal(ret.data.hasOwnProperty('length'), true);
          assert.equal(ret.data.hasOwnProperty('data'), true);
          assert.equal(typeof(ret.data.data), 'object');
          if(cid == 0) {
            assert.equal(ret.data.data[0].hasOwnProperty('timestamp'), true);
            assert.equal(ret.data.data[0].hasOwnProperty('volume'), true);
          } else if (cid == 1) {
            assert.equal(ret.data.data[0].hasOwnProperty('timestamp'), true);
            assert.equal(ret.data.data[0].hasOwnProperty('volume_in'), true);
            assert.equal(ret.data.data[0].hasOwnProperty('volume_out'), true);
          } else {
            assert.equal(ret.data.data[0].hasOwnProperty('timestamp'), true);
            assert.equal(ret.data.data[0].hasOwnProperty('records'), true);
          }
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });

      it('should has rigte value', (done) => {
        httpCall(p6).then((ret) => {
          assert.equal(ret.data.cluster, cid);
          assert.equal(ret.data.data.length, ret.data.length);
          done();
        }).catch((err) => {
          console.log(err);
          done();
        });
      });
    });
  });

  let p7 = `/virtualResource`;
  describe(p7, () => {
    it('should return status 200', (done) => {
      httpCall(p7).then((ret) => {
        assert.equal(ret.status, 200);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should has rigte properties', (done) => {
      httpCall(p7).then((ret) => {
        assert.equal(ret.data.hasOwnProperty('vcores'), true);
        assert.equal(ret.data.hasOwnProperty('vmems'), true);
        assert.equal(ret.data.hasOwnProperty('hdfs_capacity'), true);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  let p8 = `/virtualResource/usage`;
  describe(p8, () => {
    it('should return status 200', (done) => {
      httpCall(p8).then((ret) => {
        assert.equal(ret.status, 200);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should has rigte properties', (done) => {
      httpCall(p8).then((ret) => {
        assert.equal(ret.data.hasOwnProperty('length'), true);
        assert.equal(ret.data.hasOwnProperty('data'), true);
        assert.equal(typeof(ret.data.data), 'object');
        assert.equal(ret.data.data[0].hasOwnProperty('timestamp'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('vcore_used'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('vmem_used'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('hdfs_used'), true);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should has rigte value', (done) => {
      httpCall(p8).then((ret) => {
        assert.equal(ret.data.data.length, ret.data.length);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  let p9 = `/users/statistic`;
  describe(p9, () => {
    it('should return status 200', (done) => {
      httpCall(p9).then((ret) => {
        assert.equal(ret.status, 200);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should has rigte properties', (done) => {
      httpCall(p9).then((ret) => {
        assert.equal(ret.data.hasOwnProperty('timestamp'), true);
        assert.equal(ret.data.hasOwnProperty('length'), true);
        assert.equal(ret.data.hasOwnProperty('data'), true);
        assert.equal(typeof(ret.data.data), 'object');
        assert.equal(ret.data.data[0].hasOwnProperty('user'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('vcore_seconds'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('mem_used'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('during_time'), true);
        assert.equal(ret.data.data[0].hasOwnProperty('jobs'), true);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });

    it('should has rigte value', (done) => {
      httpCall(p9).then((ret) => {
        assert.equal(ret.data.data.length, ret.data.length);
        done();
      }).catch((err) => {
        console.log(err);
        done();
      });
    });
  });

});

