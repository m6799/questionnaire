var express = require('express');
var router = express.Router();

var loginCheck = function(req, res, next) {
    if(req.session.user){
        next();
    }else{
        res.redirect('login');
    }
};

/**
 * リクエストボディーから回答結果を抽出
 */
var extract = function (req) {
    return {
        answer1: req.body.answer1,
        answer2: req.body.answer2,
        answer3: req.body.answer3
    };
  };



//GET  quest/input
router.get('/input', loginCheck, function(req, res) {
    res.render('./quest/input', { user: req.session.user});
});


//POST  quest/complete
router.post('/complete', loginCheck, function(req, res) {
    var questdata = extract(req);
    res.render('./quest/complete', { user: req.session.user,questdata});
});

module.exports = router;
