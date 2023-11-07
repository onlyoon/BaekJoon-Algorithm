const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);
const firstNum = input.shift();

const solution = (arr, num) => {
    const stack = [];
    for (let i = 0; i < num; i++) {
        if (arr[i] === 0) {
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    return stack.reduce((acc, cur) => {
        return acc + cur
    }, 0);
};

console.log(solution(input, firstNum));