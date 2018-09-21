var express = require('express');
var router = express.Router();
var model = require('../model');
var Answer = model.Answer;
var User = model.User;

var loginCheck = function(req, res, next) {
    if(req.session.user){
        next();
    }else{
        res.redirect('/login');
    }
};

/**
 * リクエストボディーから回答結果を抽出する
 */
// 


//GET  quest/input
router.get('/input', loginCheck, function(req, res) {
    var userpulldown;

    User.find(null, 'username', function (err, docs) {
        if (err) {
            console.log(err);
            res.render('./quest/input', { user: req.session.user});
        } else{
            userpulldown = docs;
            console.log("usernameのプルダウンリクエスト");
            console.log(userpulldown);
        }
    });

    var query = {
        user:req.session.user
    };

    Answer.findOne(query, function(err, data) {
        if (err) {
            console.log(err);
            res.render('./quest/input', { user: req.session.user});
        }
        if (data == null) {
            console.log("データとれなかったよ。。");
            data = new Answer();
            res.render('./quest/input', { user: req.session.user,data,userpulldown});
        } else {
            console.log("データとれたよ。。");
            // console.log(data);
            res.render('./quest/input', { user: req.session.user,data,userpulldown});
        }

    

    });


});


//POST  quest/complete
router.post('/complete', loginCheck, function(req, res) {

    //var questanswer = extract(req);
    var questanswer = req.body;
    
    console.log(questanswer);
    
    //回答がはじめてなら新規登録、既にあればアップデート
    var query = {
        user:questanswer.user,
        quest:questanswer.quest
    }
    Answer.findOneAndUpdate(query, questanswer, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
    });

    res.render('./quest/complete', { user: req.session.user,questanswer});
});


router.get('/result', function(req, res, next) {
    var ans;

    Answer.find({ quest:'2018firsthalf' },null, function (err, docs) {
        if (err) {
            console.log(err);
        } else{
            ans = docs;
            console.log("とれたAnswer");
            console.log(ans);
            res.render('./quest/result',{ans});

        }
    });

    // User.find(null,null, function (err, docs) {
    //     if (err) {
    //         console.log(err);
    //     } else{
    //         ans = docs;
    //         console.log("とれたUser");
    //         console.log(ans);
    //         res.render('./quest/result',{ans});

    //     }
    // });


    // console.log("これ出したい");
    // //console.log(ans.shisakuanswer1_2);
    // console.log(ans);

    // data = new Answer();

    // ans =[
    //     {

    //         test1:'test11',
    //         test2:'test22'
    //     },

    //     {

    //         test1:'test111',
    //         test2:'test222'
    //     }

    // ] 

    // console.log("demo");
    // console.log(ans);


    

    
});

module.exports = router;
