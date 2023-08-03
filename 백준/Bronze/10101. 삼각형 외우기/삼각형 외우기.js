let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(v => +v);

function solution(arr) {
    const [a, b, c] = arr;
    if (a + b + c !== 180) {
        return console.log('Error');
    } else {
        if (a === b && b === c) {
            return console.log("Equilateral");
        } else {
            if (a === b || b === c || c === a) {
                return console.log("Isosceles");
            } else {
                return console.log("Scalene")
            }
        }
    }
}

solution(input);
