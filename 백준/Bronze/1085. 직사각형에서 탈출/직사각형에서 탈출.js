const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);
function solution(arr) {
  const a = arr[0] - 0;
  const b = arr[2] - arr[0];
  const c = arr[1] - 0;
  const d = arr[3] - arr[1];
  let x = 0;
  let y = 0;
  if (a > b) {
    x = b;
  } else {
    x = a;
  }
  if (c > d) {
    y = d;
  } else {
    y = c;
  }
  if (x > y) {
    return console.log(y);
  } else {
    return console.log(x);
  }
}

solution(input);
