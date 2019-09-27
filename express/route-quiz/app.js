var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get('/speak/:animal', function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human!",
        clownfish: "WHERE'S MY SON!"
    };
    var animal = req.params.animal;
    var sound = sounds[animal];
    res.send("The " + animal + " says " + sound);
});

app.get('/repeat/:word/:count', function(req, res){
    var word = req.params.word;
    var count = Number(req.params.count);
    var repeat = "";
    for(var i = 0; i < count - 1; ++i) {
        repeat += (word + " ");
    }
    repeat += word;
    res.send(repeat);
});

app.get('*', function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("App has started");
});