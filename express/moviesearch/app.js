const express = require('express');
const rp = require('request-promise');
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

app.get('/results', (req, res) => {
    var options = {
        uri: "https://www.omdbapi.com/",
        qs: {
            s: req.query.search,
            apikey: "thewdb"
        },
        resolveWithFullResponse: true,
        json: true,
    };
    rp(options)
    .then((response) => {
        if(response.statusCode === 200) {
            const data = response.body;
            res.render("results", {data: data});
        }
    })
    .catch((err) => {
        console.log("Error! ", err);
    });
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});

