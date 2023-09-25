const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);

function solution(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(solution(input).join(" "));