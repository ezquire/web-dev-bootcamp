var num = -10;

console.log("PRINT ALL NUMBERS FROM -10 TO 19");
while(num <= 19) {
    console.log(num);
    num++;
}
console.log("PRINT ALL EVEN NUMBERS FROM 10 TO 40");
num = 10;
while(num <= 40) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num++;
}
console.log("PRINT ALL ODD NUMBERS FROM 300 TO 333");
num = 300;
while(num <= 333) {
    if(num % 2 != 0) {
        console.log(num);
    }
    num++;
}
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 FROM 5 TO 50");
num = 5;
while(num <= 50) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log(num);
    }
    num++;
}