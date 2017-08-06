var express = require('express');
var router = express.Router();
const Redis = require('ioredis');

/* GET home page. */
router.get('/', function (req, res, next) {


    const config = {
        port: 16379,          // Redis port
        host: 'home.gotodk.cn',   // Redis host
        password: 'tudoudigua',
        family: 4,           // 4 (IPv4) or 6 (IPv6)
        db: 0
    };


    //当前日期
    var date = new Date();
    var year = date.getFullYear();
    year = year.toString().substr(2, 2);
    var month = date.getMonth() + 1;
    month = (Array(2).join(0) + month).slice(-2);
    var day = date.getDate();
    day = (Array(2).join(0) + day).slice(-2);
    var hour = date.getHours();
    hour = (Array(2).join(0) + hour).slice(-2);
    var minute = date.getMinutes();
    minute = (Array(2).join(0) + minute).slice(-2);
    var second = date.getSeconds();
    second = (Array(2).join(0) + second).slice(-2);
    //获得日期前缀(精确到分钟或秒从这里加上)
    var date_str = year + '' + month + '' + day + '';


    if（是否可以用）
    锁定（）

    let redis = new Redis(config);
    //设置24小时候后过期
    redis.expire('MyNumber' + date_str, 60*60*24);
    //累加编码并立刻获取
    redis.hincrby('MyNumber' + date_str, req.query.modname, 1).then(rst => {
       
        //console.log(rst);
        //顺序号补几个零，超过补位的数不会截断
        var len = 5;
        if ((rst + '').length < len) {
            rst = (Array(len).join(0) + rst).slice(-len);
        }
        var newnumber_str = date_str+''+rst+'';
        //输出
        res.render('getnumber', { newnumber: newnumber_str });

    });


解锁（）




});

module.exports = router;
