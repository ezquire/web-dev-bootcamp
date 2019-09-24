var arr = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9];

function printReverse(arr) {
    for(i = arr.length - 1; i >= 0; --i) {
        console.log(arr[i]);
    }
}

function isUniform(arr) {
    var firstElem = arr[0];
    for(i = 1; i < arr.length; ++i) {
        if(arr[i] != firstElem) {
            return false;
        }
    }
    return true;
}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(elem) {
        sum += elem;
    });
    return sum;
}

function max(arr) {
    var max = -Number.MAX_VALUE;
    arr.forEach(function(elem) {
        if(elem > max) {
            max = elem;
        }
    });
    return max;
}

function myForEach(arr, func) {
    for(i = 0; i < arr.length; ++i) {
        func(arr[i]);
    }
}

printReverse(arr);
console.log(isUniform(arr));
console.log(sumArray(arr));
console.log(max(arr));
myForEach(arr, function(elem) {
    console.log(elem);
});