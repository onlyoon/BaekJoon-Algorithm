const fs = require('fs');

const input = +fs.readFileSync('/dev/stdin').toString().trim();

let result = 0;
let a = 0;
let b = 1;
let temp = 0;
function solution(num, firstNum, secondNum, temp, result) {
    if (num <= 1) {
        return +result;
    } else {
        result = firstNum + secondNum;
        temp = secondNum;
        secondNum += firstNum;
        firstNum = temp;
        --num;
        return solution(num, firstNum, secondNum, temp, result);
        
    }
}
if (input === 1) {
    console.log(1);
} else {
    console.log(solution(input, a, b, temp, result));
}

