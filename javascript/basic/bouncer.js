var age = prompt("How old are you?")

if(age < 1) {
    console.log("Error you must enter a valid age greater than 0");
} else if(age < 18) {
    console.log("Sorry, you are not old enough to enter the venue");
} else if(age < 21) {
    console.log("You can enter, but not drink");
} else {
    console.log("Come on in! Have a drink.");
}
if(age === 21) {
    console.log("Happy 21st birthday!!");
} 
if(age % 2 != 0) {
    console.log("your age is odd!");
} 
if (Number.isInteger(Math.sqrt(age))) {
    console.log("perfect square!")
}