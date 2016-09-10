var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/static'))

app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/blocks', function(req, res){
    var blocks = "<b>test</b>";
    res.send(blocks);
});

app.get('/test', function(req, res){
    res.render('index.ejs');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});