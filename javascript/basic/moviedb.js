var movies = [
    { title: "Hateful 8", rating: 5, hasWatched: true },
    { title: "Deliverance", rating: 5, hasWatched: true },
    { title: "Finding Nemo", rating: 4.2, hasWatched: true },
    { title: "Gone With the Wind", rating: 4.5, hasWatched: false },
    { title: "The Sandlot", rating: 4.8, hasWatched: true }
];

movies.forEach(function(movie) {
    if(movie.hasWatched === true) {
        console.log("You have watched " + "\"" + movie.title +"\"" + " - " + movie.rating + " stars");
    } else {
        console.log("You have not watched " + "\"" + movie.title +"\"" + " - " + movie.rating + " stars");
    }
});

