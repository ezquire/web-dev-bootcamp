const express = require("express"),
      methodOverride = require("method-override"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      sanitizer = require("express-sanitizer"),
      app = express();

mongoose.connect("mongodb://localhost/restblog", {useNewUrlParser: true, useFindAndModify: false});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(sanitizer());

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) throw err;
        res.render("index", {blogs: blogs});
    });
});

app.post("/blogs", (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, newBlog) => {
        if(err) throw err;
        res.redirect("/blogs");
    });
});

app.get("/blogs/new", (req, res) => {
    res.render("new");
});

app.get("/blogs/:id", (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if(err) throw err;
        res.render("show", {blog: blog});
    });
});

app.get("/blogs/:id/edit", (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if(err) throw err;
        res.render("edit", {blog: blog});
    });
});

app.put("/blogs/:id", (req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, blog) => {
        if(err) throw err;
        res.redirect("/blogs/" + req.params.id);
    });
});

app.delete("/blogs/:id", (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err) => {
        if(err) throw err;
        res.redirect("/blogs");
    });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});