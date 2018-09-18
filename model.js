var mongoose = require('mongoose');
var url = 'mongodb://localhost/questdata';
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
    password  : String,
    username  : String
},{collection: 'info'});

exports.User = db.model('User', UserSchema);



// Modelの定義  (回答スキーマ)
var AnswerSchema = new mongoose.Schema({
    user:String,
    quest:String,

    shisakuanswer1_1:Number,
    shisakuanswer1_2:String,
    shisakuanswer2_1:Number,
    shisakuanswer2_2:String,
    shisakuanswer3_1:Number,
    shisakuanswer3_2:String,
    shisakuanswer4_1:Number,
    shisakuanswer4_2:String,
    shisakuanswer5_1:Number,
    shisakuanswer5_2:String,
    shisakuanswer6_1:Number,
    shisakuanswer6_2:String,
    shisakuanswer7_1:Number,
    shisakuanswer7_2:String,
    shisakuanswer8_1:Number,
    shisakuanswer8_2:String,
    shisakuanswer9_1:Number,
    shisakuanswer9_2:String,
    shisakuanswer10_1:Number,
    shisakuanswer10_2:String,
    shisakuanswer11_1:Number,
    shisakuanswer11_2:String,
    shisakuanswer12_1:Number,
    shisakuanswer12_2:String,
    shisakuanswer13_1:Number,
    shisakuanswer13_2:String,
    shisakuanswer14_1:Number,
    shisakuanswer14_2:String,
    shisakuanswer15_1:Number,
    shisakuanswer15_2:String,
    shisakuanswer16_1:Number,
    shisakuanswer16_2:String,
    shisakuanswer17_1:Number,
    shisakuanswer17_2:String,
    shisakuanswer18_1:Number,
    shisakuanswer18_2:String,
    shisakuanswer19_1:Number,
    shisakuanswer19_2:String,
    shisakuanswer20_1:Number,
    shisakuanswer20_2:String,
    shisakuanswer21_1:Number,
    shisakuanswer21_2:String,
    shisakuanswer22_1:Number,
    shisakuanswer22_2:String,
    shisakuanswer23_1:Number,
    shisakuanswer23_2:String,
    shisakuanswer24_1:Number,
    shisakuanswer24_2:String,
    shisakuanswer25_1:Number,
    shisakuanswer25_2:String,
    shisakuanswer26_1:Number,
    shisakuanswer26_2:String,
    shisakuanswer27:String,

    teamanswer1_1:Number,
    teamanswer1_2:String,
    teamanswer2_1:Number,
    teamanswer2_2:String,
    teamanswer3_1:Number,
    teamanswer3_2:String,
    teamanswer4_1:Number,
    teamanswer4_2:String,
    teamanswer5_1:Number,
    teamanswer5_2:String,
    teamanswer6_1:Number,
    teamanswer6_2:String,
    teamanswer7_1:Number,
    teamanswer7_2:String,
    teamanswer8_1:Number,
    teamanswer8_2:String,
    teamanswer9_1:Number,
    teamanswer9_2:String,
    teamanswer10_1:Number,
    teamanswer10_2:String,
    teamanswer11_1:Number,
    teamanswer11_2:String,
    teamanswer12_1:Number,
    teamanswer12_2:String,
    teamanswer13_1:Number,
    teamanswer13_2:String,
    teamanswer14:String,

    visionanswer1_1:Number,
    visionanswer1_2:String,
    visionanswer2_1:Number,
    visionanswer2_2:String,
    visionanswer3_1:Number,
    visionanswer3_2:String,
    visionanswer4_1:Number,
    visionanswer4_2:String,
    visionanswer5_1:Number,
    visionanswer5_2:String,
    visionanswer6_1:Number,
    visionanswer6_2:String,
    visionanswer7_1:Number,
    visionanswer7_2:String,
    visionanswer8_1:Number,
    visionanswer8_2:String,
    visionanswer9_1:Number,
    visionanswer9_2:String,
    visionanswer10_1:Number,
    visionanswer10_2:String,
    visionanswer11_1:Number,
    visionanswer11_2:String,
    visionanswer12_1:Number,
    visionanswer12_2:String,
    visionanswer13_1:Number,
    visionanswer13_2:String,
    visionanswer14:String,

    motivateanswer1_1:Number,
    motivateanswer1_2:String,
    motivateanswer2_1:Number,
    motivateanswer2_2:String,
    motivateanswer3_1:Number,
    motivateanswer3_2:String,
    motivateanswer4_1:Number,
    motivateanswer4_2:String,
    motivateanswer5_1:Number,
    motivateanswer5_2:String,
    motivateanswer6_1:Number,
    motivateanswer6_2:String,
    motivateanswer7:String,

    mvpanswer1_1:String,
    mvpanswer1_2:String,
    
    mvpanswer2_1:String,
    mvpanswer2_2:String,

    mvpanswer3_1:String,
    mvpanswer3_2:String,

    etcanswer1:String,
    etcanswer2:String,
    etcanswer3:String,
    etcanswer4:String,
    etcanswer5:String
    
},{collection: 'answer'});

exports.Answer = db.model('Answer', AnswerSchema);