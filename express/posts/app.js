var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

var friends = ["Tom", "Dick", "Harry"];

app.set('view engine', "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/friends', function(req, res) {
    res.render("friends", {friends, friends});
});

app.post('/addFriend', function(req ,res) {
    friends.push(req.body.name);
    res.redirect('/friends');
});

app.listen(3000, function(){
    console.log("Server listening on port 3000");
})