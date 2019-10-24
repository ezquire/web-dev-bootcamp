const express = require("express"),
      bodyParser = require("body-parser"),
      session = require("express-session"),
      mongoose = require("mongoose"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      methodOverride = require("method-override"),
      flash = require("connect-flash"),
      //passportLocalMongoose = require("passport-local-mongoose"),
      seedDB = require("./seeds"),
      //Campground = require("./models/campground"),
      //Comment = require("./models/comment"),
      User = require("./models/user"),
      app = express();

const campgroundRoutes = require("./routes/campgrounds"),
      commentRoutes = require("./routes/comments"),
      indexRoutes = require("./routes/index");

seedDB();

// App Config
mongoose.connect("mongodb://localhost/yelpcamp", {useNewUrlParser: true, useFindAndModify: false});
app.set("view engine", "ejs");
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// End App Config

// Passport Config
app.use(session({
    secret: "Sam is a kicky poo shitty boo",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// End Passport Config

app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});