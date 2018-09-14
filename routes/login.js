var express = require('express');
var router = express.Router();
var model = require('../model');
var User = model.User;

router.get('/', function(req, res) {
    res.render('login');
    console.log("loginが表示されたよ");
});

router.post('/', function(req, res) {
    console.log("login画面でＰＯＳＴされたよ");
    var email = req.body.email;
    var password = req.body.password;
    var query = {
        "email": email,
        "password": password
    };
    User.find(query, function(err, data) {
        if (err) {
            console.log(err);
        }
        if (data.length==0) {
            res.render('login');
            console.log("queryがなげられないよ。。/log。");
        } else if (query.email == query.password){
            console.log("emailとパスワードが一緒。初期パスワードだから、パスワード変更画面にいくよ。");
            //req.session.user = email;
            req.session.user = data[0].username;
            req.session.email = data[0].email;
            res.redirect('/idchange');
        } else {
            console.log("userはあるってよ。/にリダイレクトするよ。");
            console.log(data);
            console.log(data.length);
            //req.session.user = email;
            req.session.user = data[0].username;
            req.session.email = data[0].email;
            res.redirect('/');
        }
    });
});

module.exports = router;