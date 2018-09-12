var express = require('express');
var router = express.Router();
var model = require('../model');
var Answer = model.Answer;


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
var extract = function (req) {
    return {
        shisakuanswer1_1:req.body.shisakuanswer1_1,
        shisakuanswer1_2:req.body.shisakuanswer1_2,
        shisakuanswer2_1:req.body.shisakuanswer2_1,
        shisakuanswer2_2:req.body.shisakuanswer2_2,
        shisakuanswer3_1:req.body.shisakuanswer3_1,
        shisakuanswer3_2:req.body.shisakuanswer3_2,
        shisakuanswer4_1:req.body.shisakuanswer4_1,
        shisakuanswer4_2:req.body.shisakuanswer4_2,
        shisakuanswer5_1:req.body.shisakuanswer5_1,
        shisakuanswer5_2:req.body.shisakuanswer5_2,
        shisakuanswer6_1:req.body.shisakuanswer6_1,
        shisakuanswer6_2:req.body.shisakuanswer6_2,
        shisakuanswer7_1:req.body.shisakuanswer7_1,
        shisakuanswer7_2:req.body.shisakuanswer7_2,
        shisakuanswer8_1:req.body.shisakuanswer8_1,
        shisakuanswer8_2:req.body.shisakuanswer8_2,
        shisakuanswer9_1:req.body.shisakuanswer9_1,
        shisakuanswer9_2:req.body.shisakuanswer9_2,
        shisakuanswer10_1:req.body.shisakuanswer10_1,
        shisakuanswer10_2:req.body.shisakuanswer10_2,
        shisakuanswer11_1:req.body.shisakuanswer11_1,
        shisakuanswer11_2:req.body.shisakuanswer11_2,
        shisakuanswer12_1:req.body.shisakuanswer12_1,
        shisakuanswer12_2:req.body.shisakuanswer12_2,
        shisakuanswer13_1:req.body.shisakuanswer13_1,
        shisakuanswer13_2:req.body.shisakuanswer13_2,
        shisakuanswer14_1:req.body.shisakuanswer14_1,
        shisakuanswer14_2:req.body.shisakuanswer14_2,
        shisakuanswer15_1:req.body.shisakuanswer15_1,
        shisakuanswer15_2:req.body.shisakuanswer15_2,
        shisakuanswer16_1:req.body.shisakuanswer16_1,
        shisakuanswer16_2:req.body.shisakuanswer16_2,
        shisakuanswer17_1:req.body.shisakuanswer17_1,
        shisakuanswer17_2:req.body.shisakuanswer17_2,
        shisakuanswer18_1:req.body.shisakuanswer18_1,
        shisakuanswer18_2:req.body.shisakuanswer18_2,
        shisakuanswer19_1:req.body.shisakuanswer19_1,
        shisakuanswer19_2:req.body.shisakuanswer19_2,
        shisakuanswer20_1:req.body.shisakuanswer20_1,
        shisakuanswer20_2:req.body.shisakuanswer20_2,
        shisakuanswer21_1:req.body.shisakuanswer21_1,
        shisakuanswer21_2:req.body.shisakuanswer21_2,
        shisakuanswer22_1:req.body.shisakuanswer22_1,
        shisakuanswer22_2:req.body.shisakuanswer22_2,
        shisakuanswer23_1:req.body.shisakuanswer23_1,
        shisakuanswer23_2:req.body.shisakuanswer23_2,
        shisakuanswer24_1:req.body.shisakuanswer24_1,
        shisakuanswer24_2:req.body.shisakuanswer24_2,
        shisakuanswer25_1:req.body.shisakuanswer25_1,
        shisakuanswer25_2:req.body.shisakuanswer25_2,
        shisakuanswer26_1:req.body.shisakuanswer26_1,
        shisakuanswer26_2:req.body.shisakuanswer26_2,
        shisakuanswer27:req.body.shisakuanswer27,
        teamanswer1_1:req.body.teamanswer1_1,
        teamanswer1_2:req.body.teamanswer1_2,
        visionanswer1_1:req.body.visionanswer1_1,
        visionanswer1_2:req.body.visionanswer1_2,
        motivateanswer1_1:req.body.motivateanswer1_1,
        motivateanswer1_2:req.body.motivateanswer1_2,
        mvpanswer1_1:req.body.mvpanswer1_1,
        mvpanswer1_2:req.body.mvpanswer1_2,
        etcanswer1:req.body.etcanswer1
    };
};



//GET  quest/input
router.get('/input', loginCheck, function(req, res) {
    var query = {
        user:req.session.user
    };

    Answer.findOne(query, function(err, data) {
        if (err) {
            console.log(err);
            res.render('./quest/input', { user: req.session.user,data});
        }
        if (data == null) {
            console.log("データとれなかったよ。。");
            res.render('./quest/input', { user: req.session.user});
        } else {
            console.log("データとれたよ。。");
            // console.log(data);
            res.render('./quest/input', { user: req.session.user,data});
        }

    

    });


});


//POST  quest/complete
router.post('/complete', loginCheck, function(req, res) {

    var questanswer = extract(req);
    var questdata = {
        user:req.session.user
    };
    Object.assign(questdata, questanswer);
    

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
        user:req.session.user
    }
    Answer.findOneAndUpdate(query, questdata, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
    });



    res.render('./quest/complete', { user: req.session.user,questdata});
});

module.exports = router;
