const Campground = require("../models/campground"),
      Comment = require("../models/comment");

var middlewareObj = {};

middlewareObj.isCampgroundAuthor = function(req, res, next) {
    if(req.isAuthenticated()) {
        Campground.findById(req.params.id, (err, campground) => {
            if(err || !campground) {
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                if(campground.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            } 
        });
    } else {
        req.flash("error", "You must be logged in to do that.");
        res.redirect("back");
    }
}

middlewareObj.isCommentAuthor = function(req, res, next) {
    if(req.isAuthenticated()) {
        Comment.findById(req.params.comment_id, (err, comment) => {
            if(err || !comment) {
                req.flash("error", "Comment not found.")
                res.redirect("back");
            } else {
                if(comment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You must be logged in to do that.");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You must be logged in to do that.");
    res.redirect("back");
}

module.exports = middlewareObj;