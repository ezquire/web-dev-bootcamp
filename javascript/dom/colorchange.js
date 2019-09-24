var button = document.querySelector("button");

button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});



//var wasChanged = false;

/*button.addEventListener("click", function() {
    if(wasChanged) {
        document.body.style.background = "white";
    } else {
        document.body.style.background = "purple";
    }
    wasChanged = !wasChanged;
});*/

