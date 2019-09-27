var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hi There!");
});

app.get('/bye', function(req, res) {
    res.send("Goodbye!");
});

app.get('/dog', function(req, res) {
    res.send("MEOW!");
});

app.get('/r/:subredditName', function(req, res) {
    var name = req.params.subredditName;
    res.send("Welcome to the " + name + " subreddit.");
});

app.get('*', function(req, res) {
    res.send("You are a star!");
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});