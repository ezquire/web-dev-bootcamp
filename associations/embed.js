const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blogdemo", {useNewUrlParser: true});

const postSchema = new mongoose.Schema({
    title: String,
    content: String
}); 

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "linus@brown.edu",
//     name: "Linus"
// });

// newUser.posts.push({
//     title: "Blankets",
//     content: "Are Awesome"
// });

// newUser.save((err, user) => {
//     if(err) throw err;
//     console.log(user);
// });

// var newPost = new Post({
//     title: "Apples",
//     content: "Delicious"
// });

User.findOne({email: "linus@brown.edu"}, (err, user) => {
    if(err) throw err;
    user.posts.push({
        title: "Snoopy",
        content: "Is a good boy"
    });
    user.save((err, user) => {
        if(err) throw err;
        console.log(user);
    });
});

// newPost.save((err, post) => {
//     if(err) throw err;
//     console.log(post);
// });