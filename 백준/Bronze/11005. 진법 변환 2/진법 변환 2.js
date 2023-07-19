const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function solution(arr) {
  const a = arr[0].toString(arr[1]).toUpperCase();
  return a;
}

console.log(solution(input));
