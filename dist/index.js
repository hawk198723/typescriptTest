"use strict";
function calculateAverage(numbers) {
    var sum = numbers.reduce(function (acc, current) { return acc + current; }, 0);
    return sum / numbers.length;
}
var values = [10, 20, 30, 40, 50];
var average = calculateAverage(values);
console.log("The average of [".concat(values.join(", "), "] is ").concat(average));
