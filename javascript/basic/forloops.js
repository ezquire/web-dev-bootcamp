console.log("PRINT ALL NUMBERS FROM -10 TO 19");
for(var i = -10; i <= 19; ++i) {
    console.log(i);
}
console.log("PRINT ALL EVEN NUMBERS FROM 10 TO 40");
for(var i = 10; i <= 40; ++i) {
    if(i % 2 === 0) {
        console.log(i);
    }
}
console.log("PRINT ALL ODD NUMBERS FROM 300 TO 333");
for(var i = 300; i <= 333; ++i) {
    if(i % 2 != 0) {
        console.log(i);
    }
}
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 FROM 5 TO 50");
for(var i = 5; i <= 50; ++i) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}