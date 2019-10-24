const express = require("express"),
      passport = require("passport"),
      User = require("../models/user"),
      router = express.Router();

// Basic Routes
router.get("/", (req, res) => {
    res.render("landing");
});
// End Basic Routes

// Authentication Routes
router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", (req, res) => {
    const newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, (err, user) => {
        if(err) {
            req.flash("error", err.message);
            res.redirect("/register");
        }
        passport.authenticate("local")(req, res, () => {
            req.flash("success", "Welcome to YelpCamp" + user.username);
            res.redirect("/campgrounds");
        });
    });
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login",
    failureFlash: true,
    successFlash: "Welcome back to YelpCamp"
}));

router.get("/logout", (req, res) => {
    req.logout();
    req.flash("success", "Logged out!");
    res.redirect("/campgrounds");
});
// End Authentication Routes

module.exports = router;