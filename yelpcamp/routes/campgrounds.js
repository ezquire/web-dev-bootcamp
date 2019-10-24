const express = require("express"),
      Campground = require("../models/campground"),
      Comment = require("../models/comment"),
      middleware = require("../middleware"),
      router = express.Router();

router.get("/", (req, res) => {
    if(req.query.search) {
        var regex = new RegExp(escapeRegex(req.query.search), "gi");
        Campground.find({name: regex}, (err, campgrounds) => {
            if(err || campgrounds.length === 0) {
                req.flash("error", "Campground not found");
                res.redirect("/campgrounds");
            } else {
                res.render("campgrounds/index", {campgrounds: campgrounds});
            }
        });
    } else {
        Campground.find({}, (err, campgrounds) => {
            if(err) throw err;
            res.render("campgrounds/index", {campgrounds: campgrounds});
        });
    }
});

router.get("/new", middleware.isLoggedIn, (req, res) => {
    res.render("campgrounds/new");
});

router.post("/", middleware.isLoggedIn, (req, res) => {
    Campground.create(req.body.campground, (err, newcamp) => {
        newcamp.author.id = req.user._id;
        newcamp.author.username = req.user.username;
        newcamp.save();
        req.flash("success", "New Campground added!");
        res.redirect("/campgrounds");
    });
});

router.get("/:id", (req, res) => {
    Campground.findById(req.params.id).populate("comments").exec((err, campground) => {
        if(err || !campground) {
            req.flash("error", "Campground not found");
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/show", {campground: campground});
        }
    });
});

router.get("/:id/edit", middleware.isCampgroundAuthor, (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err || !campground) {
            req.flash("error", "Campground not found");
            res.redirect("/campgrounds");
        } else {
            res.render("campgrounds/edit", {campground: campground});
        }
    });
});

router.put("/:id", middleware.isCampgroundAuthor, (req, res) => {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, (err, campground) => {
        if(err || !campground) {
            req.flash("error", "Campground not found");
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    });
});

router.delete("/:id", middleware.isCampgroundAuthor, (req, res) => {
    Campground.findByIdAndRemove(req.params.id, (err, campground) => {
        if(err || !campground) {
            req.flash("error", "Campground not found");
            res.redirect("/campgrounds");
        } else {
            Comment.deleteMany({_id: { $in: campground.comments } } , (err) => {
                if(err) throw err;
            });
            res.redirect("/campgrounds");
        }
    });
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;