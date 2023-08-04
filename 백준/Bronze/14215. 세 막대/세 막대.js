
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim().split(" ").map(v => +v);

function solution(arr) {
  const a = Math.max(...arr);
  const b = Math.min(...arr);
  arr.splice(arr.indexOf(a), 1);
  arr.splice(arr.indexOf(b), 1);
  const c = arr[0];
  if (b + c <= a) {
    console.log(b + c + b + c - 1);
  } else {
    console.log(a + b + c);
  }
}

solution(input);
