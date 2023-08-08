
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim().split(" ");

function solution(num) {
  return num[0];
}

console.log(solution(input));
console.log(1);