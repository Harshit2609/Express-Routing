var express =  require('express');
var bodyParser =  require('body-parser');
var app = express();

var urlEncodedParser = bodyParser.urlencoded({extended : false});
app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact',{qs: req.query});
});

app.post('/contact', urlEncodedParser, function(req,res){
  console.log(req.body);
  res.render('contact',{qs: req.query});
});


app.get('/profile/:name',function(req,res){
  res.render('profile',{person : req.params.name});
});

app.listen(3000);
console.log("Server running on port 3000");
