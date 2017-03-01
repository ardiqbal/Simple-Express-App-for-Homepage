var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('profile');
});

app.listen(3000, function(){
  console.log("Server Running at Port 3000");
});
