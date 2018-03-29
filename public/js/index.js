/**
 * Created by zm on 2018/3/11.
 */
//  var path = 'http://192.168.1.111:3000'
Vue.prototype.bytesToGB = function(val) {
    return (parseInt(val) / 1073741824).toFixed(2)
}
Vue.prototype.toNum2 = function(num,n){
    return parseFloat((num).toFixed(n))
}

// const oneMinutes = 60000
const oneMinutes = 10000
const oneHours = 3600000
const oneDays = 86400000

var vm = new Vue({
    el: '.ad-container',
    data: {
        timeType:{
            twoS: 2000,
            oneM: 60000,
            oneH: 3600000,
            oneD: 86400000
        },
        uses:[
            {
                mem_useN:10,
                mem_useD:30,
                disk_useN:20,
                disk_useD:40
            },
            {
                mem_useN:0,
                mem_useD:0,
                disk_useN:0,
                disk_useD:0
            },
            {
                mem_useN:0,
                mem_useD:0,
                disk_useN:0,
                disk_useD:0
            }
        ],
        lastData8:{
            vcores: 65.4,
            vmems: 76.5,
            hdfs_capacity: 54.7
        },
        lastData3: [
            {
                cpu_percent: 0,
                diskSum: 0,
                netSum: 0
            }
        ],
        data1: {
            good: 0,
            bad: 0,
            bad_monthly: 0,
            bad_until_now: 0
        },
        data2: [

            {
                'cluster': 0,
                'nodes': 18,
                'cores': 345,
                'memory': 2394712937,
                'disk': 123234089203

            },
            {
                'cluster': 1,
                'nodes': 18,
                'cores': 345,
                'memory': 2394712937,
                'disk': 123234089203
            },
            {
                'cluster': 2,
                'nodes': 18,
                'cores': 345,
                'memory': 2394712937,
                'disk': 123234089203
            }
        ],
        data3: [
        {
            'cluster': 0,
            'length': 30,
            'data':[
                {
                    timestamp: 123443278754,
                    cpu_percent: 0.4,
                    mem_used: 122849,
                    disk_used: 32842812,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32101.4,
                    net_output: 4930.8,
                    health: 0
                },
                {
                    timestamp: 123444378754,
                    cpu_percent: 0.5,
                    mem_used: 120849,
                    disk_used: 32842912,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32941.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 12344568754,
                    cpu_percent: 0.2,
                    mem_used: 121849,
                    disk_used: 32842712,
                    disk_input: 3839.2,
                    disk_output: 1382.1,
                    net_input: 32981.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 123421678754,
                    cpu_percent: 0.3,
                    mem_used: 123249,
                    disk_used: 32842612,
                    disk_input: 4829.2,
                    disk_output: 1382.1,
                    net_input: 32801.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 123444578754,
                    cpu_percent: 0.1,
                    mem_used: 123839,
                    disk_used: 32842842,
                    disk_input: 6829.2,
                    disk_output: 1382.1,
                    net_input: 32001.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 123445623754,
                    cpu_percent: 0.8,
                    mem_used: 123844,
                    disk_used: 32242812,
                    disk_input: 3429.2,
                    disk_output: 1382.1,
                    net_input: 32001.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 123445673454,
                    cpu_percent: 0.9,
                    mem_used: 123859,
                    disk_used: 32843812,
                    disk_input: 3929.2,
                    disk_output: 1382.1,
                    net_input: 32701.4,
                    net_output: 4930.8,
                    health: 0
                }]          
            },
        {
            'cluster': 1,
            'length': 30,
            'data':[
                {
                    timestamp: 1294890876859,
                    cpu_percent: 0.4,
                    mem_used: 122849,
                    disk_used: 32842812,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32101.4,
                    net_output: 4930.8,
                    health: 0
                },
                {
                    timestamp: 1294790876859,
                    cpu_percent: 0.5,
                    mem_used: 120849,
                    disk_used: 32842912,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32941.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.2,
                    mem_used: 121849,
                    disk_used: 32842712,
                    disk_input: 3839.2,
                    disk_output: 1382.1,
                    net_input: 32981.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.3,
                    mem_used: 123249,
                    disk_used: 32842612,
                    disk_input: 4829.2,
                    disk_output: 1382.1,
                    net_input: 32801.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.1,
                    mem_used: 123839,
                    disk_used: 32842842,
                    disk_input: 6829.2,
                    disk_output: 1382.1,
                    net_input: 32001.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.8,
                    mem_used: 123844,
                    disk_used: 32242812,
                    disk_input: 3429.2,
                    disk_output: 1382.1,
                    net_input: 32001.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.9,
                    mem_used: 123859,
                    disk_used: 32843812,
                    disk_input: 3929.2,
                    disk_output: 1382.1,
                    net_input: 32701.4,
                    net_output: 4930.8,
                    health: 0
                }]          
            },
        {
            'cluster': 2,
            'length': 30,
            'data':[
                {
                    timestamp: 1294890876859,
                    cpu_percent: 0.4,
                    mem_used: 122849,
                    disk_used: 32842812,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32101.4,
                    net_output: 4930.8,
                    health: 0
                },
                {
                    timestamp: 1294790876859,
                    cpu_percent: 0.5,
                    mem_used: 120849,
                    disk_used: 32842912,
                    disk_input: 3829.2,
                    disk_output: 1382.1,
                    net_input: 32941.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.2,
                    mem_used: 121849,
                    disk_used: 32842712,
                    disk_input: 3839.2,
                    disk_output: 1382.1,
                    net_input: 32981.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.3,
                    mem_used: 123249,
                    disk_used: 32842612,
                    disk_input: 4829.2,
                    disk_output: 1382.1,
                    net_input: 32801.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.1,
                    mem_used: 123839,
                    disk_used: 32842842,
                    disk_input: 6829.2,
                    disk_output: 1382.1,
                    net_input: 32001.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.8,
                    mem_used: 123844,
                    disk_used: 32242812,
                    disk_input: 3429.2,
                    disk_output: 1382.1,
                    net_input: 32001.4,
                    net_output: 4930.8,
                    health: 0
                },{
                    timestamp: 1294890876859,
                    cpu_percent: 0.9,
                    mem_used: 123859,
                    disk_used: 32843812,
                    disk_input: 3929.2,
                    disk_output: 1382.1,
                    net_input: 32701.4,
                    net_output: 4930.8,
                    health: 0
                }]          
            } 
        ],
        data4:  [[{                                   //Vue.js 不能检测到数组变化,所以用splice
                'timestamp': 123908234082,
                'volume_in': 2394.43,
                'volume_out': 2494.3
                },{
                'timestamp': 123902234082,
                'volume_in': 2384.43,
                'volume_out': 2394.3
                },{
                'timestamp': 123902134082,
                'volume_in': 2384.43,
                'volume_out': 2394.3
                },{
                'timestamp': 123408234082,
                'volume_in': 2384.43,
                'volume_out': 2394.3
                },{
                'timestamp': 123438234082,
                'volume_in': 2384.43,
                'volume_out': 2394.3
                },{
                'timestamp': 123218234082,
                'volume_in': 2384.43,
                'volume_out': 2394.3
                },{
                'timestamp': 123932234082,
                'volume_in': 2334.43,
                'volume_out': 2294.3
                },{
                'timestamp': 123908234082,
                'volume_in': 2324.43,
                'volume_out': 2194.3
                },
        ]],
        data5: [
                [{
                    timestamp: 123821312499,
                    service_name: 'flume',
                    health: 0
                }],[{
                    timestamp: 123821312499,
                    service_name: 'flume',
                    health: 0
                }],[{
                    timestamp: 123821312499,
                    service_name: 'flume',
                    health: 0
                }]
        ],
        data6: [[{
                    timestamp: 123902234082,
                    volume: 2334.43
                },{
                    timestamp: 123908234582,
                    volume: 2384.43
                },{
                    timestamp: 123908234782,
                    volume: 2334.43,
                }
        ]],
        data7: {
            vcores: 123,
            vmems: 492039,
            hdfs_capacity: 2934802983
        },
        data8: {
            timestamp: 1239083408,
            vcore_used: 6,
            vmem_used: 10005,
            hdfs_used: 3200941
        },
        data9: [[
            {
                user: 'anjian',
                vcore_seconds: 232362,
                mem_used: 3293204,
                during_time: 23489123,
                jobs: 12392
            },
            {
                user: 'anian',
                vcore_seconds: 232362,
                mem_used: 3293204,
                during_time: 23489123,
                jobs: 12390
            },{
                user: 'ajian',
                vcore_seconds: 232392,
                mem_used: 3293204,
                during_time: 23489123,
                jobs: 12398
            },{
                user: 'njian',
                vcore_seconds: 232242,
                mem_used: 3293204,
                during_time: 23489123,
                jobs: 12389
            },{
                user: 'jian',
                vcore_seconds: 232442,
                mem_used: 3297204,
                during_time: 23489123,
                jobs: 12395
            }
        ]],
        data10: [[{
                    'timestamp': 123902234082,
                    'records': 2184
                },{
                    'timestamp': 123908234582,
                    'records': 2334
                },{
                    'timestamp': 123908234782,
                    'records': 2374
                }
        ]],
    },
    filters:{
        bytesToGB(val) {
            return (parseInt(val) / 1073741824).toFixed(3)
        },
        dateFormat(timestamp){
            // if(typeof ms == 'number'){
            //     ms = new Date(ms)
            // }else{
            //     ms = new Date(parseInt(ms))
            // }
            // var lastDate = ''
            // opts.indexOf('YY')!=-1 && (lastDate += ms.getFullYear()+'年')
            // opts.indexOf('MM')!=-1 && (lastDate += ms.getMonth()+1+'月')
            // opts.indexOf('DD')!=-1 && (lastDate += ms.getDate()+'日 ')
            // opts.indexOf('HH')!=-1 && (lastDate += ms.getHours()+'时')
            // opts.indexOf('mm')!=-1 && (lastDate += ms.getMinutes()+'分')
            // opts.indexOf('ss')!=-1 && (lastDate += ms.getSeconds()+'秒')
            // return lastDate
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
            D = date.getDate() + '日 ';
            h = date.getHours() + '点';
            m = date.getMinutes() + '分';
            s = date.getSeconds();
            return M+D+h+m;
            
        },
    },
    computed: {
        evenData9: function () {            
            this.data9.sort(function (x, y) {
                if (x.vcore_seconds < y.vcore_seconds) {
                    return 1;
                } else if (x.vcore_seconds === y.vcore_seconds) {
                    if (x.mem_used < y.mem_used) {
                        return 1;
                    }else if (x.mem_used === y.mem_used) {
                        if (x.during_time < y.during_time) {
                            return 1;
                        }else if (x.during_time === y.during_time) {
                            return x.jobs < y.jobs ? 1 : -1;
                        } else if (x.during_time > y.during_time) {
                            return -1;
                        } 
                    } else if (x.mem_used > y.mem_used) {
                        return -1;
                    }                    
                } else if (x.vcore_seconds > y.vcore_seconds) {
                    return -1;
                }
            })
        }
    },
    beforeCreate:function(){
        this.$nextTick(function () {
            
        })
    },
    created: function () {       
        this.$nextTick(function () {
            var that = this
            this.getJkzk() // 1
            //this.getJqzl(0)
            //this.getJqzl(1)
            //this.getJqzl(2)
            this.getData2()
            this.getData3() //3
            this.getData5() // 5
            // setInterval(function(){
            //     that.getData5() // 5
            // },oneMinutes)
            this.getData6() // 6,4,10
            this.getJqzyzl() // 7

            this.getJqzysy(1)// 8
            // setInterval(function(){
            //     that.getJqzysy(1)// 8
            // },oneMinutes)
            this.getJquse() // 9
            //var ind = 0;
            //var arr9 = ['vcore_seconds','mem_used','jobs','during_time']
            //计时器
            var int = 0
            var timer1 = setInterval(function(){
                int ++
                that.getData3();
                that.getData5();
                that.getData6();
                that.getJqzysy(1)
                setTimeout(function() {
                    that.draw()
                }, 1000)
                // if (int > 5) {
                //     clearInterval(timer1)
                // }
            },oneMinutes);
            var timer2 = setInterval(function(){
                that.getJquse();
            }, oneDays);
            /*that.getJquse(function(res){
                that.arrSort(res,arr9[0])
            })
            setInterval(function(){
                that.getJquse(function(res){
                    ind ++
                    if(ind>=arr9.length){
                        ind = 0
                    }
                    //console.log(arr9[ind])
                    that.arrSort(res,arr9[ind])
                })
                //},5000)
            },oneDays)*/
        })
    },
    mounted: function () {
        this.$nextTick(function () {
           this.myChart1 = echarts.init(document.getElementById('myChart1'));
           this.myChart2 = echarts.init(document.getElementById('myChart2'));
           this.myChart3 = echarts.init(document.getElementById('myChart3'));
           this.myChart4 = echarts.init(document.getElementById('myChart4'));
           this.myChart5 = echarts.init(document.getElementById('myChart5'));
           this.myChart6 = echarts.init(document.getElementById('myChart6'));
           this.myChart7 = echarts.init(document.getElementById('myChart7'));
           this.myChart8 = echarts.init(document.getElementById('myChart8'));
           this.myChart9 = echarts.init(document.getElementById('myChart9'));
           this.myChart10 = echarts.init(document.getElementById('myChart10'));
           this.myChart11 = echarts.init(document.getElementById('myChart11'));
           this.myChart12 = echarts.init(document.getElementById('myChart12'));
           var _this = this;
           setTimeout(function() {
                _this.draw()
            }, 1000)          
        })
    },
    watch:{
        data3:{
            handler:function(val,oldVal){
                //this.getUses()
                var _this = this;
               setTimeout(function() {
                    //_this.draw()
                }, 1000)
            },
            // 深度观察
            deep:true
        },       
        /*data4:{
            handler:function(val,oldVal){
               setTimeout(function() {
                    _this.draw()
                }, 1000)
            },
            // 深度观察
            deep:true
        },   */                  
    },
    methods: {
        arrSort(arr,attr){
            arr.sort(function(a,b){
                return a[attr] - b[attr];
            })
        },
        fn_bytesToGB: function(val) {
            return (parseInt(val) / 1073741824).toFixed(3)
        },
        // 计算内存、磁盘的未使用量
        getUses:function(){
            var len = 0
            while (len < 3){
                this.uses[len].mem_useN = accSub(this.data2[len].memory, this.data3[len].data[0].mem_used)
                this.uses[len].mem_useD = this.data3[len].data[0].mem_used
                this.uses[len].disk_useN = accSub(this.data2[len].disk, this.data3[len].data[0].disk_used)
                this.uses[len].disk_useD = this.data3[len].data[0].disk_used
                len++
            }
        },
        //sort_user
        getUser_sort:function() {
            this.data9[0].sort(function (x, y) {
                if (x.vcore_seconds < y.vcore_seconds) {
                    return 1;
                } else if (x.vcore_seconds === y.vcore_seconds) {
                    if (x.mem_used < y.mem_used) {
                        return 1;
                    }else if (x.mem_used === y.mem_used) {
                        if (x.during_time < y.during_time) {
                            return 1;
                        }else if (x.during_time === y.during_time) {
                            return x.jobs < y.jobs ? 1 : -1;
                        } else if (x.during_time > y.during_time) {
                            return -1;
                        } 
                    } else if (x.mem_used > y.mem_used) {
                        return -1;
                    }                    
                } else if (x.vcore_seconds > y.vcore_seconds) {
                    return -1;
                }
            })
        },
        // 分别获取资源总量
        getData2: function (){
            var len = 0
            while (len < 3){
                this.getJqzl(len)
                len++
            }
            //console.log(this.data2)
        },
        getData3: function (){
            var len = 0
            while (len < 3){
                this.getJqsy(len, 30)
                len++
            }
            //this.getJqsy(index,n)
            // console.log(this.data3)
            //return this.data3[index]
        },
        getData5: function (){
            var len = 0
            while (len < 3){
                this.getJqls(len,6)
                len++
            }
            //console.log(this.data5)
        },
        getData6: function (){
            this.getJqsjzt(0,24)
            this.getJqsjzt(1,24)
            this.getJqsjzt(2,7)           
        },
        getData8(){
            this.lastData8.vcores = accMul(accDiv(this.data8.vcore_used, this.data7.vcores), 100).toFixed(1)
            this.lastData8.vmems = accMul(accDiv(this.data8.vmem_used, this.data7.vmems), 100).toFixed(1)
            this.lastData8.hdfs_capacity = accMul(accDiv(this.data8.hdfs_used, this.data7.hdfs_capacity), 100).toFixed(1)
        },
        // this.$http.get('/someUrl', [options]).then(function(response){}
        getJkzk: function () { // 1.健康状况
            var that = this
            this.$http.get('/api/v1/hostStatus').
                then(function (res) {
                    // console.log(res.body)
                    that.data1 = res.body
                    //console.log(that.data1)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzl: function (ct) { // 2.集群资源总量
            var that = this
            this.$http.get('/api/v1/' + ct + '/resource').
                then(function (res) {
                    // console.log(res.body)
                    that.data2.splice(ct,1,res.body)
                    //that.data2[ct] = res.body;
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqsy: function (ct, n) { // 3.集群资源使用情况
            var that = this
            this.$http.get('/api/v1/' + ct + '/resource/usage?range=' + n).
                then(function (res) {
                    // console.log(res.body.data)
                    that.data3.splice(ct,1,res.body)
                    //that.data3[ct] = res.body;
                    this.getUses()
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzt: function (ct) { // 4.集群服务当前运行状态
            var that = this
            this.$http.get('/api/v1/' + ct + '/serviceStatus').
                then(function (res) {
                    // console.log(res.body)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqls: function (ct, n) { // 5.获取集群服务运行状态历史
            var that = this
            this.$http.get('/api/v1/' + ct + '/serviceStatus/history?range=' + n).
                then(function (res) {
                    // console.log(res.body.data)
                    that.data5.splice(ct,1,res.body.data)
                    //that.$data.data5[ct] = res.body.data
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqsjzt: function (ct, n) { // 6.获取集群数据状态
            var that = this
            this.$http.get('/api/v1/' + ct + '/dataStatus?range=' + n).
                then(function (res) {
                    // console.log(res.body)
                    //that.data6.splice(ct,1,res.body.data)
                    if (ct == 0) {                       
                        that.data6.splice(0,1,res.body.data)
                    }else if (ct == 1) {
                        that.data4.splice(0,1,res.body.data)
                    } else if (ct == 2) {
                        that.data10.splice(0,1,res.body.data)
                    }
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzyzl: function () { // 7.获取计算存储集群虚拟资源总量
            var that = this
            this.$http.get('/api/v1/virtualResource').
                then(function (res) {
                    // console.log(res.body)
                    that.data7 = res.body
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJqzysy: function (n) { // 8.获取计算存储集群资源使用情况
            var that = this
            this.$http.get('/api/v1/virtualResource/usage?range=' + n).
                then(function (res) {
                    // console.log(res.body.data)
                    that.data8 = res.body.data[0]
                    //console.log(that.data8)
                    that.getData8()
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        getJquse: function () { // 9.获取用户使用资源情况
            var that = this
            this.$http.get('/api/v1/users/statistic').
                then(function (res) {
                    // console.log(res.body.data)
                    that.data9.splice(0,1,res.body.data)
                    this.getUser_sort();
                    //that.arrSort(that.data9,'vcore_seconds')
                    //cb(that.data9)
                }, function (res) {
                    console.log(res.body.msg)
                    // 响应错误回调
                });
        },
        draw:function() {
            var _this = this;
            //console.log(this.data3[0].data)
            var option1 = {
                //color: ['#3FC3EC','#C48743','#FFFF00'],
                grid: {
                    x: 30,
                    y: 50,
                    x2: 40,
                    y2: 30
                },
                /*tooltip: {
                    trigger: 'axis'
                },*/
                legend: {
                    data: ['磁盘IO', '网络IO', 'CPU使用率'],
                    y: 10,
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        position: 'bottom',
        //            splitNumber: 5,
                        boundaryGap: false, // 从0开始绘制
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 10,
                            formatter: '{value}',
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'none'
                            }
                        },
                        data: (function (){
                            var res = [];
                            _this.data3[0].data.forEach(function(e) {                               
                                res.push(timestampToTime(e.timestamp))
                                                               
                            })
                            return res;
                        })()
                        // data: (function (){
                        //     var now = new Date();
                        //     var res = [];
                        //     var len = 4;
                        //     while (len--) {
                        //         res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        //         now = new Date(now - oneMinutes);
                        //     }
                        //     return res;
                        // })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '%',
                        splitNumber: 5,
                        position: 'left',
                        max: 100,
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 5,
                            formatter: '{value}',    // Template formatter!
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: 'Byte/s',
                        splitNumber: 5,                         
                        axisLabel: {
                            formatter: '{value}',
                            margin: 5,
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: '磁盘IO',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        /*data: (function(){
                            var res = []
                            var arr = vm.getData3(0,30)
                            // console.log(arr)
                            arr.forEach(function(val,i){
                                res.unshift((val.disk_input+val.disk_output))
                            })
                            // console.log(res)
                            return res
                        })()*/
                        data:(function() {
                            var res = []
                            _this.data3[0].data.forEach(function(e) {
                                res.push(accAdd(e.disk_input, e.disk_output))
                            })
                            return res
                        })()
                    },
                    {
                        name: '网络IO',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data:(function() {
                            var res = []
                            _this.data3[0].data.forEach(function(e) {
                                res.push(accAdd(e.net_input, e.net_output))
                            })
                            return res
                        })()
                        /*data: (function(){
                            var res = []
                            var arr = vm.getData3(0,30)
                            arr.forEach(function(val,i){
                                res.unshift((val.net_input+val.net_output))
                            })
                            return res
                        })()*/
                    },
                    {
                        name: 'CPU使用率',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 0,
                        data:(function() {
                            var res = []
                            _this.data3[0].data.forEach(function(e) {
                                res.push(accMul(e.cpu_percent, 100))
                            })
                            return res
                        })()
        //            xAxisIndex: 1,
        //            yAxisIndex: 1,
                        /*data: (function(){
                            var res = []
                            var arr = vm.getData3(0,30)
                            arr.forEach(function(val,i){
                                //console.log(val.cpu_percent)
                                res.unshift(val.cpu_percent*100)
                            })
                            return res
                        })()*/
                    }
                ]
            };
            var option2 = {
                color: ['#FBC31A', '#258BFF'],
                title: {
                    text: '内存占用',
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        color: '#5797D6',
                        fontSize: 12,
                        fontStyle: 'normal'
                    }
                },
                /*tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
                 },*/
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    y: 10,
                    data: ['已用', '空闲'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '使用率',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: (function(){//vmData.uses[0].mem_useD,vmData.uses[0].mem_useN
                            var res = []
                            res.push(
                                {value:_this.uses[0].mem_useD , name: '已用'},
                                {value:_this.uses[0].mem_useN , name: '空闲'}
                            )
                            return res
                        })()
                    }
                ]
            };
            var option3 = {
                color: ['#FBC31A', '#258BFF'],
                title: {
                    text: '磁盘占用',
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        color: '#5797D6',
                        fontSize: 12,
                        fontStyle: 'normal'
                    }
                },
                /*tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
                 },*/
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    y: 10,
                    data: ['已用', '空闲'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '使用率',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: (function(){
                            var res = []
                            res.push(
                                {value: _this.uses[0].disk_useD, name: '已用'},
                                {value: _this.uses[0].disk_useN, name: '空闲'}
                            )
                            return res
                        })()
                    }
                ]
            };
            var option4 = {
                color: ['#3FC3EC'],
                grid: {
                    x: 50,
                    y: 30,
                    x2: 50,
                    y2: 30
                },
                /*tooltip: {
                    trigger: 'axis'
                },*/
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            formatter: function (value) {
                                // Function formatter
        //                return value + ' °C'
                                return value
                            },
                            margin: 10,
                            textStyle: {
                                color: '#fff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        data : (function (){
                            var res = [];
                            _this.data6[0].forEach(function(e) {                               
                                res.push(timestampToTime(e.timestamp))
                            })
                            return res;
                        })()
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Byte',
                        position: 'left',
                        //min: 0,
                        //max: 300,
                        //splitNumber: 5,
                        boundaryGap: [0, 0.1],
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 1
                            }
                        },
                        axisLabel: {
                            formatter: '{value}',
                            margin: 10,
                            textStyle: {
                                color: '#fff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: 'Byte',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data : (function (){
                            var res = [];
                            _this.data6[0].forEach(function(e) {
                                res.push(e.volume)
                            })
                            return res;
                        })()
                    }
                ]
            };
            var option5 = {
                grid: {
                    x: 30,
                    y: 50,
                    x2: 40,
                    y2: 30
                },
                legend: {
                    data: ['磁盘IO', '网络IO', 'CPU使用率'],
                    y: 10,
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        position: 'bottom',
                        boundaryGap: false, // 从0开始绘制
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 10,
                            formatter: '{value}',
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'none'
                            }
                        },
                        data: (function (){
                            var res = [];
                            _this.data3[2].data.forEach(function(e) {
                                res.push(timestampToTime(e.timestamp))
                            })
                            return res;
                        })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '%',
                        splitNumber: 5,
                        position: 'left',
                        max: 100,
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 5,
                            formatter: '{value}',    // Template formatter!
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: 'Byte/s',
                        splitNumber: 5,
                        axisLabel: {
                            formatter: function (value) {
                                // Function formatter
        //                return value + ' °C'
                                return value
                            },
                            margin: 5,
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: '磁盘IO',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data:(function() {
                            var res = []
                            _this.data3[2].data.forEach(function(e) {
                                res.push(accAdd(e.disk_input, e.disk_output))
                            })
                            return res
                        })()
                    },
                    {
                        name: '网络IO',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data:(function() {
                            var res = []
                            _this.data3[2].data.forEach(function(e) {
                                res.push(accAdd(e.net_input, e.net_output))
                            })
                            return res
                        })()
                    },
                    {
                        name: 'CPU使用率',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 0,
                        data:(function() {
                            var res = []
                            _this.data3[2].data.forEach(function(e) {
                                res.push(accMul(e.cpu_percent, 100))
                            })
                            return res
                        })()
                    }
                ]
            };
            var option6 = {
                color: ['#FBC31A', '#258BFF'],
                title: {
                    text: '内存占用',
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        color: '#5797D6',
                        fontSize: 12,
                        fontStyle: 'normal'
                    }
                },
                /*tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
                 },*/
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    y: 10,
                    data: ['已用', '空闲'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '使用率',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: (function(){//vmData.uses[0].mem_useD,vmData.uses[0].mem_useN
                            var res = []
                            res.push(
                                {value:_this.uses[2].mem_useD , name: '已用'},
                                {value:_this.uses[2].mem_useN , name: '空闲'}
                            )
                            return res
                        })()
                    }
                ]
            };
            var option7 = {
                color: ['#FBC31A', '#258BFF'],
                title: {
                    text: '磁盘占用',
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        color: '#5797D6',
                        fontSize: 12,
                        fontStyle: 'normal'
                    }
                },
                /*tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
                 },*/
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    y: 10,
                    data: ['已用', '空闲'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '使用率',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: (function(){
                            var res = []
                            res.push(
                                {value: _this.uses[2].disk_useD, name: '已用'},
                                {value: _this.uses[2].disk_useN, name: '空闲'}
                            )
                            return res
                        })()
                    }
                ]
            };
                var option8 = {
                color: ['#3FC3EC'],
                grid: {
                    x: 50,
                    y: 30,
                    x2: 50,
                    y2: 30
                },
                /*tooltip: {
                    trigger: 'axis'
                },*/
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            formatter: function (value) {
                                // Function formatter
        //                return value + ' °C'
                                return value
                            },
                            margin: 10,
                            textStyle: {
                                color: '#fff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
        //                fontWeight: 'bold'
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        data : (function (){
                            var res = [];
                            _this.data10[0].forEach(function(e) {
                                res.push(timestampToTime(e.timestamp))
                            })
                            return res;
                        })()
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Byte',
                        position: 'left',
                        //max: 300,
                        //splitNumber: 5,
                        boundaryGap: [0, 0.1],
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 1
                            }
                        },
                        axisLabel: {
                            formatter: '{value}',
                            margin: 10,
                            textStyle: {
                                color: '#fff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: 'Byte',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: (function(){
                            var res = []
                            _this.data10[0].forEach(function(e) {
                                res.push(e.records)
                            })
                            return res
                        })()
                    }
                ]
            };
            var option9 = {
                //color: ['#3FC3EC','#C48743','#FFFF00'],
                grid: {
                    x: 30,
                    y: 50,
                    x2: 40,
                    y2: 30
                },
                /*tooltip: {
                    trigger: 'axis'
                },*/
                legend: {
                    data: ['磁盘IO', '网络IO', 'CPU使用率'],
                    y: 10,
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        position: 'bottom',
        //            splitNumber: 5,
                        boundaryGap: false, // 从0开始绘制
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 10,
                            formatter: '{value}',
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'none'
                            }
                        },
                        data: (function (){
                            var res = [];
                            _this.data3[1].data.forEach(function(e) {
                                res.push(timestampToTime(e.timestamp))
                            })
                            return res;
                        })()
                        // data: (function (){
                        //     var now = new Date();
                        //     var res = [];
                        //     var len = 4;
                        //     while (len--) {
                        //         res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
                        //         now = new Date(now - oneMinutes);
                        //     }
                        //     return res;
                        // })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '%',
                        splitNumber: 5,
                        position: 'left',
                        max: 100,
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',    // {number}
                            margin: 5,
                            formatter: '{value}',    // Template formatter!
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        }
                    },
                    {
                        type: 'value',
                        name: 'Byte/s',
                        splitNumber: 5,
                        axisLabel: {
                            formatter: function (value) {
                                // Function formatter
        //                return value + ' °C'
                                return value
                            },
                            margin: 5,
                            textStyle: {
                                color: '#2F95BF',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 0
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: '磁盘IO',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        /*data: (function(){
                            var res = []
                            var arr = vm.getData3(0,30)
                            // console.log(arr)
                            arr.forEach(function(val,i){
                                res.unshift((val.disk_input+val.disk_output))
                            })
                            // console.log(res)
                            return res
                        })()*/
                        data:(function() {
                            var res = []
                            _this.data3[1].data.forEach(function(e) {
                                res.push(accAdd(e.disk_input, e.disk_output))
                            })
                            return res
                        })()
                    },
                    {
                        name: '网络IO',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 1,
                        data:(function() {
                            var res = []
                            _this.data3[1].data.forEach(function(e) {
                                res.push(accAdd(e.net_input, e.net_output))
                            })
                            return res
                        })()
                        /*data: (function(){
                            var res = []
                            var arr = vm.getData3(0,30)
                            arr.forEach(function(val,i){
                                res.unshift((val.net_input+val.net_output))
                            })
                            return res
                        })()*/
                    },
                    {
                        name: 'CPU使用率',
                        type: 'line',
                        smooth: true,
                        yAxisIndex: 0,
                        data:(function() {
                            var res = []
                            _this.data3[1].data.forEach(function(e) {
                                res.push(accMul(e.cpu_percent, 100))
                            })
                            return res
                        })()
        //            xAxisIndex: 1,
        //            yAxisIndex: 1,
                        /*data: (function(){
                            var res = []
                            var arr = vm.getData3(0,30)
                            arr.forEach(function(val,i){
                                //console.log(val.cpu_percent)
                                res.unshift(val.cpu_percent*100)
                            })
                            return res
                        })()*/
                    }
                ]
            };
            var option10 = {
                color: ['#FBC31A', '#258BFF'],
                title: {
                    text: '内存占用',
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        color: '#5797D6',
                        fontSize: 12,
                        fontStyle: 'normal'
                    }
                },
                /*tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
                 },*/
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    y: 10,
                    data: ['已用', '空闲'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '使用率',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: (function(){//vmData.uses[0].mem_useD,vmData.uses[0].mem_useN
                            var res = []
                            res.push(
                                {value:_this.uses[1].mem_useD , name: '已用'},
                                {value:_this.uses[1].mem_useN , name: '空闲'}
                            )
                            return res
                        })()
                    }
                ]
            };
            var option11 = {
                color: ['#FBC31A', '#258BFF'],
                title: {
                    text: '磁盘占用',
                    x: 'center',
                    y: 'bottom',
                    textStyle: {
                        color: '#5797D6',
                        fontSize: 12,
                        fontStyle: 'normal'
                    }
                },
                /*tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b}: {c} ({d}%)"
                 },*/
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    y: 10,
                    data: ['已用', '空闲'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                        name: '使用率',
                        type: 'pie',
                        radius: ['30%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        },
                        data: (function(){
                            var res = []
                            res.push(
                                {value: _this.uses[1].disk_useD, name: '已用'},
                                {value: _this.uses[1].disk_useN, name: '空闲'}
                            )
                            return res
                        })()
                    }
                ]
            };
            var option12 = {
                color: ['#3FC3EC'],
                grid: {
                    x: 50,
                    y: 30,
                    x2: 50,
                    y2: 30
                },
                legend: {
                    data: ['流入流量', '流出流量'],
                    y: 10,
                    textStyle: {
                        color: '#fff'
                    }
                },
                /*tooltip: {
                    trigger: 'axis'
                },*/
                calculable: true,
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            formatter: function (value) {
                                // Function formatter
        //                return value + ' °C'
                                return value
                            },
                            margin: 10,
                            textStyle: {
                                color: '#fff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        },
                        data : (function (){
                            var res = [];
                            _this.data4[0].forEach(function(e) {
                                res.push(timestampToTime(e.timestamp))
                            })
                            return res;
                        })()
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: 'Byte',
                        position: 'left',
                        //min: 0,
                        //max: 300,
                        //splitNumber: 5,
                        boundaryGap: [0, 0.1],
                        axisLine: {    // 轴线
                            show: true,
                            lineStyle: {
                                color: '#2F95BF',
                                width: 1
                            }
                        },
                        axisLabel: {
                            formatter: '{value}',
                            margin: 10,
                            textStyle: {
                                color: '#fff',
                                fontFamily: 'verdana',
                                fontSize: 10,
                                fontStyle: 'normal'
                            }
                        },
                        axisTick: {    // 轴标记
                            show: true,
                            length: 3,
                            lineStyle: {
                                color: '#2F95BF',
                                type: 'solid',
                                width: 1
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '流入流量',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data : (function (){
                            var res = [];
                            _this.data4[0].forEach(function(e) {
                                res.push(e.volume_in)
                            })
                            return res;
                        })()
                    },
                    {
                        name: '流出流量',
                        type: 'line',
                        smooth: true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data : (function (){
                            var res = [];
                            _this.data4.forEach(function(e) {
                                res.push(e.volume_out)
                            })
                            return res;
                        })()
                    }
                ]
            };
            this.myChart1.setOption(option1);
            this.myChart2.setOption(option2);
            this.myChart3.setOption(option3);
            this.myChart4.setOption(option4);
            this.myChart5.setOption(option5);
            this.myChart6.setOption(option6);
            this.myChart7.setOption(option7);
            this.myChart8.setOption(option8);
            this.myChart9.setOption(option9);
            this.myChart10.setOption(option10);
            this.myChart11.setOption(option11);
            this.myChart12.setOption(option12);
        }
    } 
})

// setTimeout(function(){
//     var vmData = vm.$data

    

    // var axisData1;
    // clearInterval(timeTicket1);
    // var timeTicket1 = setInterval(function (){
    //     //var data = vm.getData3(0,1)
    //     axisData1 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);
    //     // 动态数据接口 addData
    //     myChart1.addData([
    //         [
    //             0,        // 系列索引
    //             vm.getData3(0,1)[0]['disk_input']+vm.getData3(0,1)[0]['disk_output'], // 新增数据
    //             false,    // 新增数据是否从队列头部插入
    //             false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    //             axisData1  // 坐标轴标签
    //         ],
    //         [
    //             1,        // 系列索引
    //             vm.getData3(0,1)[0]['disk_input']+vm.getData3(0,1)[0]['net_output'], // 新增数据
    //             false,    // 新增数据是否从队列头部插入
    //             false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    //         ],
    //         [
    //             2,        // 系列索引
    //             vm.getData3(0,1)[0]['cpu_percent']*100, // 新增数据
    //             false,    // 新增数据是否从队列头部插入
    //             false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    //         ]
    //     ]);
    // }, oneMinutes);

    

    // var lastIndex2 = 3;
    // clearInterval(timeTicket2);
    // var timeTicket2 = setInterval(function (){
    //     // 动态数据接口 addData
    //     myChart2.addData([
    //         [
    //             0,        // 系列索引
    //             {value: vmData.uses[0].mem_useD, name: lastIndex2%2==0?'空闲':'已用'},
    //             false,     // 新增数据是否从队列头部插入
    //             false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    //             //lastIndex%2==0?'空闲':'已用'
    //             //['已用','空闲']
    //         ]
    //     ]);
    //     lastIndex2 ++
    // }, oneMinutes);


    

    // var lastIndex3 = 3;
    // clearInterval(timeTicket3);
    // var timeTicket3 = setInterval(function (){
    //     // 动态数据接口 addData
    //     myChart3.addData([
    //         [
    //             0,        // 系列索引
    //             {value: vmData.uses[0].disk_useD, name: lastIndex3%2==0?'空闲':'已用'},
    //             false,     // 新增数据是否从队列头部插入
    //             false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
    //             //lastIndex%2==0?'空闲':'已用'
    //             //['已用','空闲']
    //         ]
    //     ]);
    //     lastIndex3 ++
    // }, oneMinutes);

//     var option4 = {
//         color: ['#3FC3EC'],
//         grid: {
//             x: 50,
//             y: 30,
//             x2: 50,
//             y2: 30
//         },
//         /*tooltip: {
//             trigger: 'axis'
//         },*/
//         calculable: true,
//         xAxis: [
//             {
//                 type: 'category',
//                 boundaryGap: false,
//                 axisLabel: {
//                     formatter: function (value) {
//                         // Function formatter
// //                return value + ' °C'
//                         return value
//                     },
//                     margin: 10,
//                     textStyle: {
//                         color: '#fff',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 },
//                 data : (function (){
//                     var now = new Date();
//                     var res = [];
//                     var len = 6;
//                     while (len--) {
//                         res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
//                         now = new Date(now - oneMinutes);
//                     }
//                     return res;
//                 })()
//             },
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 name: 'Byte',
//                 position: 'left',
//                 //min: 0,
//                 //max: 300,
//                 //splitNumber: 5,
//                 boundaryGap: [0, 0.1],
//                 axisLine: {    // 轴线
//                     show: true,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         width: 1
//                     }
//                 },
//                 axisLabel: {
//                     formatter: function (value) {
//                         // Function formatter
// //                return value + ' °C'
//                         return value
//                     },
//                     margin: 10,
//                     textStyle: {
//                         color: '#fff',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 }
//             }
//         ],
//         series: [
//             {
//                 name: 'Byte',
//                 type: 'line',
//                 smooth: true,
//                 itemStyle: {normal: {areaStyle: {type: 'default'}}},
//                 /*data: (function(){
//                     var res = []
//                     var arr = vm.getData6(0,6)
//                     arr.forEach(function(val,i){
//                         res.push(val.volume)
//                     })
//                     return res
//                 })()*/
//             }
//         ]
//     };

//     var lastData4;
//     var axisData4;
//     clearInterval(timeTicket4);
//     var timeTicket4 = setInterval(function (){
//         //lastData4 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
//         //lastData4 = lastData4.toFixed(1) - 0;
//         lastData4 = vm.getData6(0,1)[0]['volume']
//         axisData4 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

//         // 动态数据接口 addData
//         myChart4.addData([
//             [
//                 0,        // 系列索引
//                 lastData4, // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 axisData4  // 坐标轴标签
//             ]
//         ]);
//     }, oneMinutes);



//     var lastData5 = 5;
//     var axisData5;
//     clearInterval(timeTicket5);
//     var timeTicket5 = setInterval(function (){
//         axisData5 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

//         // 动态数据接口 addData
//         myChart5.addData([
//             [
//                 0,        // 系列索引
//                 vm.getData3(1,1)[0]['disk_input']+vm.getData3(0,1)[0]['disk_output'], // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 axisData5  // 坐标轴标签
//             ],
//             [
//                 1,        // 系列索引
//                 vm.getData3(1,1)[0]['disk_input']+vm.getData3(0,1)[0]['net_output'], // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//             ],
//             [
//                 2,        // 系列索引
//                 vm.getData3(1,1)[0]['cpu_percent']*100, // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//             ]
//         ]);
//     }, oneMinutes);


//     var option6 = {
//         color: ['#FBC31A', '#258BFF'],
//         title: {
//             text: '内存占用',
//             x: 'center',
//             y: 'bottom',
//             textStyle: {
//                 color: '#5797D6',
//                 fontSize: 12,
//                 fontStyle: 'normal'
//             }
//         },
//         /*tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}: {c} ({d}%)"
//          },*/
//         legend: {
//             orient: 'horizontal',
//             x: 'center',
//             y: 10,
//             data: ['已用', '空闲'],
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         series: [
//             {
//                 name: '使用率',
//                 type: 'pie',
//                 radius: ['30%', '50%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         show: false,
//                         textStyle: {
//                             color: '#fff',
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         label: {
//                             show: false
//                         },
//                         labelLine: {
//                             show: false
//                         }
//                     }
//                 },
//                 data: (function(){
//                     var res = []
//                     res.push(
//                         {value: vmData.uses[1].mem_useD, name: '已用'},
//                         {value: vmData.uses[1].mem_useN, name: '空闲'}
//                     )
//                     return res
//                 })()
//             }
//         ]
//     };

//     var lastIndex6 = 3;
//     clearInterval(timeTicket6);
//     var timeTicket6 = setInterval(function (){
//         // 动态数据接口 addData
//         myChart6.addData([
//             [
//                 0,        // 系列索引
//                 {value: vmData.uses[1].mem_useD, name: lastIndex6%2==0?'空闲':'已用'},
//                 false,     // 新增数据是否从队列头部插入
//                 false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 //lastIndex%2==0?'空闲':'已用'
//                 //['已用','空闲']
//             ]
//         ]);
//         lastIndex6 ++
//     }, oneMinutes);


//     var option7 = {
//         color: ['#FBC31A', '#258BFF'],
//         title: {
//             text: '内存占用',
//             x: 'center',
//             y: 'bottom',
//             textStyle: {
//                 color: '#5797D6',
//                 fontSize: 12,
//                 fontStyle: 'normal'
//             }
//         },
//         /*tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}: {c} ({d}%)"
//          },*/
//         legend: {
//             orient: 'horizontal',
//             x: 'center',
//             y: 10,
//             data: ['已用', '空闲'],
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         series: [
//             {
//                 name: '使用率',
//                 type: 'pie',
//                 radius: ['30%', '50%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         show: false,
//                         textStyle: {
//                             color: '#fff',
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         label: {
//                             show: false
//                         },
//                         labelLine: {
//                             show: false
//                         }
//                     }
//                 },
//                 data: (function(){
//                     var res = []
//                     res.push(
//                         {value: vmData.uses[1].disk_useD, name: '已用'},
//                         {value: vmData.uses[1].disk_useN, name: '空闲'}
//                     )
//                     return res
//                 })()
//             }
//         ]
//     };

//     var lastIndex7 = 3;
//     clearInterval(timeTicket7);
//     var timeTicket7 = setInterval(function (){
//         // 动态数据接口 addData
//         myChart7.addData([
//             [
//                 0,        // 系列索引
//                 {value: vmData.uses[1].disk_useD, name: lastIndex7%2==0?'空闲':'已用'},
//                 false,     // 新增数据是否从队列头部插入
//                 false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 //lastIndex%2==0?'空闲':'已用'
//                 //['已用','空闲']
//             ]
//         ]);
//         lastIndex7 ++
//     }, oneMinutes);



//     var lastData8;
//     var axisData8;
//     clearInterval(timeTicket8);
//     var timeTicket8 = setInterval(function (){
//         //lastData8 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
//         //lastData8 = lastData4.toFixed(1) - 0;
//         lastData8 = vm.getData6(1,1)[0]['volume']
//         axisData8 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

//         // 动态数据接口 addData
//         myChart8.addData([
//             [
//                 0,        // 系列索引
//                 lastData8, // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 axisData8  // 坐标轴标签
//             ]
//         ]);
//     }, oneMinutes);

//     var option9 = {
//         //color: ['#3FC3EC','#C48743','#FFFF00'],
//         grid: {
//             x: 30,
//             y: 50,
//             x2: 40,
//             y2: 30
//         },
//         /*tooltip: {
//             trigger: 'axis'
//         },*/
//         legend: {
//             data: ['磁盘IO', '网络IO', 'CPU使用率'],
//             y: 10,
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         xAxis: [
//             {
//                 type: 'category',
//                 position: 'bottom',
// //            splitNumber: 5,
//                 boundaryGap: false, // 从0开始绘制
//                 axisLine: {    // 轴线
//                     show: true,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 0
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 },
//                 axisLabel: {
//                     show: true,
//                     interval: 'auto',    // {number}
//                     margin: 10,
//                     formatter: '{value}',
//                     textStyle: {
//                         color: '#2F95BF',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
//                     }
//                 },
//                 splitLine: {
//                     show: true,
//                     lineStyle: {
//                         type: 'none'
//                     }
//                 },
//                 data: (function (){
//                     var now = new Date();
//                     var res = [];
//                     var len = 4;
//                     while (len--) {
//                         res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
//                         now = new Date(now - oneMinutes);
//                     }
//                     return res;
//                 })()
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 name: '%',
//                 splitNumber: 5,
//                 position: 'left',
//                 max: 100,
//                 axisLine: {    // 轴线
//                     show: true,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         width: 0
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 },
//                 axisLabel: {
//                     show: true,
//                     interval: 'auto',    // {number}
//                     margin: 5,
//                     formatter: '{value}',    // Template formatter!
//                     textStyle: {
//                         color: '#2F95BF',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
//                     }
//                 }
//             },
//             {
//                 type: 'value',
//                 name: 'Byte/s',
//                 splitNumber: 5,
//                 axisLabel: {
//                     formatter: function (value) {
//                         // Function formatter
// //                return value + ' °C'
//                         return value
//                     },
//                     margin: 5,
//                     textStyle: {
//                         color: '#2F95BF',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
//                     }
//                 },
//                 axisLine: {    // 轴线
//                     show: true,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         width: 0
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 },
//                 splitLine: {
//                     show: true
//                 }
//             }
//         ],
//         series: [
//             {
//                 name: '磁盘IO',
//                 type: 'line',
//                 smooth: true,
//                 yAxisIndex: 1,
//                 data: (function(){
//                     var res = []
//                     var arr = vm.getData3(2,30)
//                     arr.forEach(function(val,i){
//                         res.push((val.disk_input+val.disk_output))
//                     })
//                     return res
//                 })()
//             },
//             {
//                 name: '网络IO',
//                 type: 'line',
//                 smooth: true,
//                 yAxisIndex: 1,
//                 data: (function(){
//                     var res = []
//                     var arr = vm.getData3(2,30)
//                     arr.forEach(function(val,i){
//                         res.push((val.net_input+val.net_output))
//                     })
//                     return res
//                 })()
//             },
//             {
//                 name: 'CPU使用率',
//                 type: 'line',
//                 smooth: true,
// //            xAxisIndex: 1,
// //            yAxisIndex: 1,
//                 data: (function(){
//                     var res = []
//                     var arr = vm.getData3(2,30)
//                     arr.forEach(function(val,i){
//                         //console.log(val.cpu_percent)
//                         res.push(val.cpu_percent*100)
//                     })
//                     return res
//                 })()
//             }
//         ]
//     };

//     var lastData9;
//     var axisData9;
//     clearInterval(timeTicket9);
//     var timeTicket9 = setInterval(function (){
//         axisData9 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

//         // 动态数据接口 addData
//         myChart9.addData([
//             [
//                 0,        // 系列索引
//                 vm.getData3(2,1)[0]['disk_input']+vm.getData3(0,1)[0]['disk_output'], // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 axisData9  // 坐标轴标签
//             ],
//             [
//                 1,        // 系列索引
//                 vm.getData3(2,1)[0]['disk_input']+vm.getData3(0,1)[0]['net_output'], // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//             ],
//             [
//                 2,        // 系列索引
//                 vm.getData3(2,1)[0]['cpu_percent']*100, // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//             ]
//         ]);
//     }, oneMinutes);

//     var option10 = {
//         color: ['#FBC31A', '#258BFF'],
//         title: {
//             text: '内存占用',
//             x: 'center',
//             y: 'bottom',
//             textStyle: {
//                 color: '#5797D6',
//                 fontSize: 12,
//                 fontStyle: 'normal'
//             }
//         },
//         /*tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}: {c} ({d}%)"
//          },*/
//         legend: {
//             orient: 'horizontal',
//             x: 'center',
//             y: 10,
//             data: ['已用', '空闲'],
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         series: [
//             {
//                 name: '使用率',
//                 type: 'pie',
//                 radius: ['30%', '50%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         show: false,
//                         textStyle: {
//                             color: '#fff',
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         label: {
//                             show: false
//                         },
//                         labelLine: {
//                             show: false
//                         }
//                     }
//                 },
//                 data: (function(){
//                     var res = []
//                     res.push(
//                         {value: vmData.uses[2].mem_useD, name: '已用'},
//                         {value: vmData.uses[2].mem_useN, name: '空闲'}
//                     )
//                     return res
//                 })()
//             }
//         ]
//     };

//     var lastIndex10 = 3;
//     clearInterval(timeTicket10);
//     var timeTicket10 = setInterval(function (){
//         // 动态数据接口 addData
//         myChart10.addData([
//             [
//                 0,        // 系列索引
//                 {value: vmData.uses[2].mem_useD, name: lastIndex10%2==0?'空闲':'已用'},
//                 false,     // 新增数据是否从队列头部插入
//                 false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 //lastIndex%2==0?'空闲':'已用'
//                 //['已用','空闲']
//             ]
//         ]);
//         lastIndex10 ++
//     }, oneMinutes);


//     var option11 = {
//         color: ['#FBC31A', '#258BFF'],
//         title: {
//             text: '内存占用',
//             x: 'center',
//             y: 'bottom',
//             textStyle: {
//                 color: '#5797D6',
//                 fontSize: 12,
//                 fontStyle: 'normal'
//             }
//         },
//         /*tooltip: {
//          trigger: 'item',
//          formatter: "{a} <br/>{b}: {c} ({d}%)"
//          },*/
//         legend: {
//             orient: 'horizontal',
//             x: 'center',
//             y: 10,
//             data: ['已用', '空闲'],
//             textStyle: {
//                 color: '#fff'
//             }
//         },
//         series: [
//             {
//                 name: '使用率',
//                 type: 'pie',
//                 radius: ['30%', '50%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     normal: {
//                         show: false,
//                         position: 'center'
//                     },
//                     emphasis: {
//                         show: false,
//                         textStyle: {
//                             color: '#fff',
//                             fontSize: '30',
//                             fontWeight: 'bold'
//                         }
//                     }
//                 },
//                 labelLine: {
//                     normal: {
//                         show: false
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         label: {
//                             show: false
//                         },
//                         labelLine: {
//                             show: false
//                         }
//                     }
//                 },
//                 data: (function(){
//                     var res = []
//                     res.push(
//                         {value: vmData.uses[2].disk_useD, name: '已用'},
//                         {value: vmData.uses[2].disk_useN, name: '空闲'}
//                     )
//                     return res
//                 })()
//             }
//         ]
//     };

//     var lastIndex11 = 3;
//     clearInterval(timeTicket11);
//     var timeTicket11 = setInterval(function (){
//         // 动态数据接口 addData
//         myChart11.addData([
//             [
//                 0,        // 系列索引
//                 {value: vmData.uses[2].disk_useD, name: lastIndex11%2==0?'空闲':'已用'},
//                 false,     // 新增数据是否从队列头部插入
//                 false,     // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 //lastIndex%2==0?'空闲':'已用'
//                 //['已用','空闲']
//             ]
//         ]);
//         lastIndex11 ++
//     }, oneMinutes);

//     var option12 = {
//         color: ['#3FC3EC','#C48743'],
//         grid: {
//             x: 50,
//             y: 30,
//             x2: 50,
//             y2: 30
//         },
//         legend: {
//             data:['流入流量','流出流量'],
//             textStyle:{
//                 color: '#fff'
//             }
//         },
//         /*tooltip: {
//             trigger: 'axis'
//         },*/
//         calculable: true,
//         xAxis: [
//             {
//                 type: 'category',
//                 boundaryGap: false,
//                 axisLabel: {
//                     formatter: function (value) {
//                         // Function formatter
// //                return value + ' °C'
//                         return value
//                     },
//                     margin: 10,
//                     textStyle: {
//                         color: '#fff',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
// //                fontWeight: 'bold'
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 },
//                 data : (function (){
//                     var now = new Date();
//                     var res = [];
//                     var len = 6;
//                     while (len--) {
//                         res.unshift(now.toLocaleTimeString().replace(/^\D*/,'').slice(0,8));
//                         now = new Date(now - oneMinutes);
//                     }
//                     return res;
//                 })()
//             },
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 name: 'Byte',
//                 position: 'left',
//                 boundaryGap: [0, 0.1],
//                 axisLine: {    // 轴线
//                     show: true,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         width: 1
//                     }
//                 },
//                 axisLabel: {
//                     formatter: function (value) {
//                         return value
//                     },
//                     margin: 10,
//                     textStyle: {
//                         color: '#fff',
//                         fontFamily: 'verdana',
//                         fontSize: 10,
//                         fontStyle: 'normal'
//                     }
//                 },
//                 axisTick: {    // 轴标记
//                     show: true,
//                     length: 3,
//                     lineStyle: {
//                         color: '#2F95BF',
//                         type: 'solid',
//                         width: 1
//                     }
//                 }
//             }
//         ],
//         series: [
//             {
//                 name: '流入流量',
//                 type: 'line',
//                 smooth: true,
//                 itemStyle: {normal: {areaStyle: {type: 'default'}}},
//                 data: (function(){
//                     var res = []
//                     var arr = vm.getData6(2,6)
//                     arr.forEach(function(val,i){
//                         res.push(val.volume_in)
//                     })
//                     return res
//                 })()
//             },
//             {
//                 name: '流出流量',
//                 type: 'line',
//                 smooth: true,
//                 itemStyle: {normal: {areaStyle: {type: 'default'}}},
//                 data: (function(){
//                     var res = []
//                     var arr = vm.getData6(2,6)
//                     arr.forEach(function(val,i){
//                         res.push(val.volume_out)
//                     })
//                     return res
//                 })()
//             },
//         ]
//     };

//     var lastData12;
//     var axisData12;
//     clearInterval(timeTicket12);
//     var timeTicket12 = setInterval(function (){
//         //lastData12 += Math.random() * ((Math.round(Math.random() * 10) % 2) == 0 ? 1 : -1);
//         //lastData12 = lastData4.toFixed(1) - 0;
//         lastData12 = vm.getData6(2,1)[0]['volume_in']
//         axisData12 = (new Date()).toLocaleTimeString().replace(/^\D*/,'').slice(0,8);

//         // 动态数据接口 addData
//         myChart12.addData([
//             [
//                 0,        // 系列索引
//                 lastData12, // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//                 axisData12  // 坐标轴标签
//             ],
//             [
//                 1,        // 系列索引
//                 vm.getData6(2,1)[0]['volume_out'], // 新增数据
//                 false,    // 新增数据是否从队列头部插入
//                 false,    // 是否增加队列长度，false则自定删除原有数据，队头插入删队尾，队尾插入删队头
//             ]
//         ]);
//     }, oneMinutes);

// 基于准备好的dom，初始化echarts图表
    //var myChart1 = echarts.init(document.getElementById('myChart1'));
    //var myChart2 = echarts.init(document.getElementById('myChart2'));
    //var myChart3 = echarts.init(document.getElementById('myChart3'));
    // var myChart4 = echarts.init(document.getElementById('myChart4'));
    // var myChart5 = echarts.init(document.getElementById('myChart5'));
    // var myChart6 = echarts.init(document.getElementById('myChart6'));
    // var myChart7 = echarts.init(document.getElementById('myChart7'));
    // var myChart8 = echarts.init(document.getElementById('myChart8'));
    // var myChart9 = echarts.init(document.getElementById('myChart9'));
    // var myChart10 = echarts.init(document.getElementById('myChart10'));
    // var myChart11 = echarts.init(document.getElementById('myChart11'));
    // var myChart12 = echarts.init(document.getElementById('myChart12'));

// 为echarts对象加载数据
    //myChart1.setOption(option1);
    //myChart2.setOption(option2);
    //myChart3.setOption(option3);
    /*myChart4.setOption(option4);
    myChart5.setOption(option5);
    myChart6.setOption(option6);
    myChart7.setOption(option7);
    myChart8.setOption(option8);
    myChart9.setOption(option9);
    myChart10.setOption(option10);
    myChart11.setOption(option11);
    myChart12.setOption(option12);*/

//},1000)
//浮点类型精确的加减法
function accAdd(arg1,arg2){  
    var r1,r2,m;  
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
    m=Math.pow(10,Math.max(r1,r2))  
    return (arg1*m+arg2*m)/m  
}
function accSub(arg1,arg2){      
    return accAdd(arg1,-arg2);  
}
function accMul(arg1,arg2)  
{  
    var m=0,s1=arg1.toString(),s2=arg2.toString();  
    try{m+=s1.split(".")[1].length}catch(e){}  
    try{m+=s2.split(".")[1].length}catch(e){}  
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)  
}
function accDiv(arg1,arg2){  
    var t1=0,t2=0,r1,r2;  
    try{t1=arg1.toString().split(".")[1].length}catch(e){}  
    try{t2=arg2.toString().split(".")[1].length}catch(e){}  
    with(Math){  
        r1=Number(arg1.toString().replace(".",""))  
        r2=Number(arg2.toString().replace(".",""))  
        return (r1/r2)*pow(10,t2-t1);  
    }  
}
//时间戳转换为日期格式, 只取时间
function timestampToTime(timestamp) {
    if (timestamp == undefined) {
        //console.log(timestamp)
    }
    var _timestamp = timestamp
    var date = new Date(_timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    Y = date.getFullYear() + '-';
    M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    //return Y+M+D+h+m+s;
    return h+m+s;
    
}