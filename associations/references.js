const mongoose = require("mongoose"),
      User = require("./models/user.js"),
      Post = require("./models/post.js");

mongoose.connect("mongodb://localhost/blogdemo2", {useNewUrlParser: true});

// User.create({
//     email: "flanders@simpsons.com",
//     name: "Ned Flanders"
// }, (err, user) => {
//     if(err) throw err;
//     console.log(user);
// });

Post.create({
    title: "Dollary Doos",
    content: "Austrialdiddly Doodly"
}, (err, post) => {
    if(err) throw err;
    User.findOne({email: "flanders@simpsons.com"}, (err, found) => {
        if(err) throw err;
        found.posts.push(post);
        found.save((err, data) => {
            if(err) throw err;
        });
    });
});

User.findOne({email: "flanders@simpsons.com"}).populate("posts").exec((err, found) => {
    if(err) throw err;
    console.log(found);
});