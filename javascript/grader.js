function avg(arr) {
    var sum = 0;
    arr.forEach(function(score) {
            sum += score;
        });

    return Math.round(sum/arr.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(avg(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(avg(scores2));