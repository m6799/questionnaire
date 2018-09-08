var mongoose = require('mongoose');
var url = 'mongodb://localhost/sample-login';
var db  = mongoose.createConnection(url, function(err, res){
    if(err){
        console.log('Error connected: ' + url + ' - ' + err);
    }else{
        console.log('Success connected: ' + url);
    }
});

// Modelの定義  (ログインユーザスキーマ)
var UserSchema = new mongoose.Schema({
    email    : String,
    password  : String
},{collection: 'info'});

exports.User = db.model('User', UserSchema);



// Modelの定義  (回答スキーマ)
var AnswerSchema = new mongoose.Schema({
    user:String,
    answer1: String,
    answer2: String,
    answer3: String
},{collection: 'answer'});

exports.Answer = db.model('Answer', AnswerSchema);