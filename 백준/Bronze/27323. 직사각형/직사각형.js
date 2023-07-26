const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
function solution(arr) {
  const result = arr[0] * arr[1];
  return console.log(result);
}

solution(input);