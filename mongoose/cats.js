var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", {useNewUrlParser: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var sam = new Cat({
//     name: "Sam",
//     age: 3,
//     temperament: "Loving"
// });

// sam.save((err, cat) => {
//     if(err) {
//         console.log("Something effed up");
//     } else {
//         console.log("Cat was saved!");
//         console.log(cat);
//     }
// });
Cat.create({
    name: "Button",
    age: 5,
    temperament: "Chill"
}, (err, cat) => {
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, (err, cats) => {
    if(err) {
        console.log("Error");
        console.log(err);
    } else {
        console.log("Cats....");
        console.log(cats);
    }
});