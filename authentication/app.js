const bodyParser = require("body-parser"),
      express = require("express"),
      session = require("express-session"),
      mongoose = require("mongoose"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose"),
      User = require("./models/user"),
      app = express();

mongoose.connect("mongodb://localhost/authapp", {useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.session());
app.use(session({
    secret: "Sam is a kicky poo shitty boo",
    resave: false,
    saveUninitialized: false
}));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

// Register Routes
app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if(err) throw err;
        passport.authenticate("local")(req, res, ()=> {
            res.redirect("/secret");
        });
    });
});

// Login/Logout Routes
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}));

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});