const express = require("express"),
      Campground = require("../models/campground"),
      Comment = require("../models/comment"),
      middleware = require("../middleware"),
      router = express.Router({mergeParams: true});

router.get("/new", middleware.isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err) throw err;
        res.render("comments/new", {campground: campground});
    });
});

router.post("/", middleware.isLoggedIn, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err) throw err;
        Comment.create(req.body.comment, (err, comment) => {
            if(err) throw err;
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            comment.save();
            campground.comments.push(comment);
            campground.save();
            res.redirect("/campgrounds/" + campground._id);
        });
    });
});

router.get("/:comment_id/edit", middleware.isCommentAuthor, (req, res) => {
    Comment.findById(req.params.comment_id, (err, comment) => {
        if(err) throw err;
        res.render("comments/edit", {campground_id: req.params.id, comment: comment});
    })
});

router.put("/:comment_id", middleware.isCommentAuthor, (req, res) => {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, (err, comment) => {
        if(err) throw err;
        res.redirect("/campgrounds/" + req.params.id);
    });
});

router.delete("/:comment_id", middleware.isCommentAuthor, (req, res) => {
    Comment.findByIdAndRemove(req.params.comment_id, (err, comment) => {
        if(err) throw err;
        res.redirect("/campgrounds/" + req.params.id);
    });
});

module.exports = router;