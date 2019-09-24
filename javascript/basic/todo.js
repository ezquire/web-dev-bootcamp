var todolist = [];

window.setTimeout(function() {
    var choice = "";
    while(choice != "quit") {
        choice = prompt("What would you like to do?");
        if(choice === "new") {
            add();
        } else if(choice === "list") {
            list();
        } else if(choice === "delete") {
            del();
        }
    }
    console.log("YOU QUIT THE APP!");
}, 500);

function list() {
    todolist.forEach(function(todo, idx, todolist) {
        console.log("**********");
        console.log(idx + ": " + todo);
    });
    console.log("**********");
}

function del() {
    var index = prompt("Enter an index of todo to delete");
    todolist.splice(index, 1);
    console.log("Deleted todo at index " + index);
}

function add() {
    var item = prompt("Enter a new todo");
    todolist.push(item);
    console.log("Added todo at index " + todolist.indexOf(item));
}

