const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ").map(v => +v);


function solution(arr) {
  let result = 0;
  const N = arr.length;
  for (let i = 0; i < N; i++) {
    result += arr[i] * arr[i];
  }
  return result % 10;
}
console.log(solution(input));
