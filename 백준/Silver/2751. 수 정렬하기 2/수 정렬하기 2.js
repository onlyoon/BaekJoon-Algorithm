const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

function solution(arr) {
  const firstLine = arr.shift();
  const result = arr.sort((a, b) => a - b);
  console.log(result.join("\n"));
}

solution(input);