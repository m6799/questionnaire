var express = require('express');
var router = express.Router();
var model = require('../model');
var User = model.User;
var loginCheck = function(req, res, next) {
    if(req.session.user){
        console.log("sessionにuserがあったよ。");
        next();
    }else{
        console.log("sessionにuserがなかったよ。");
        res.redirect('login');
    }
};

router.get('/', loginCheck, function(req, res) {
    res.render('idchange');
});

// router.get('/', function(req, res) {
//     res.render('idchange');
//     console.log("idchangeが表示されたよ");
// });

router.post('/', function(req, res) {
    console.log("idchange画面でＰＯＳＴされたよ");
    var email = req.session.user;
    var afterpassword = req.body.afterpassword;
    var afterpassword2 = req.body.afterpassword2;

    var query = {
        "email": email,
    };

    var newpassword = {
        "email": email,
        "password":afterpassword
    };


    if (afterpassword != afterpassword2){
        console.log("パスワードが一致していないよ。。");
        res.render('idchange');
    } else{
        User.findOneAndUpdate(query, newpassword, {upsert:true}, function(err, doc){
            if (err) return res.send(500, { error: err });
            res.redirect('logout');
        });
    }


});

module.exports = router;