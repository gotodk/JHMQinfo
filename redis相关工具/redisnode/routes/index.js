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

  let redis = new Redis(config);

  redis.sadd('userA', ['孙悟空', '猪八戒', '狮子头', '飞机', '大炮']);
  redis.sadd('userB', ['流川枫', '电脑', '孙悟空', '天使', '飞机']);
  redis.sadd('userC', ['飞机', '溜溜球', '孙悟空']);
  //获得三个集合的交集
  redis.sinter('userA', 'userB', 'userC').then(rst => {
      //console.log(rst);
      res.render('index', { title: '集合例子', pubkeystr: rst });
  });
  



});

module.exports = router;
