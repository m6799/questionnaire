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
    
    console.log("こっちが関数でとったやつ");
    console.log(questanswer);
    
    // //この辺まだつかってない。１行で書きたい。
    // var newAnswer = new Answer(req.body);
    // console.log("こっちが一行でかいたやつ");
    // console.log(newAnswer);

    // delete newAnswer["_id"];
    // delete newAnswer["shisakuanswer1_1"];
    // console.log("_idきえましたかね？？");
    // console.log(newAnswer);

    // var bodysonomono = req.body;
    // console.log("bodyそのもの");
    // console.log(bodysonomono); 


      

    // var questquery = {
    //     user:questanswer.user
    // };

    // Object.assign(questquery, questanswer);
    //Object.assign(questdata, newAnswer);

    //全て新規レコードで突っ込む
    // var newAnswer = new Answer(questdata);
    // newAnswer.save(function(err) {
    //     if (err) {
    //         console.log(err);
    //         res.redirect('back');
    //     } else {
            
    //     }
    // });


    


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

module.exports = router;
