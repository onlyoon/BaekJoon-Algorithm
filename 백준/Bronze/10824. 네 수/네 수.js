const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split(" ").map(v => +v);

function solution(arr) {
  let num1 = `${arr[0]}${arr[1]}`;
  let num2 = `${arr[2]}${arr[3]}`;
  const result = +num1 + +num2;
  return result;
};

console.log(solution(input));