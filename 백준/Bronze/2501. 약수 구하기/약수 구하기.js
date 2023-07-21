const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function solution(arr) {
  const number = arr[0];
  const count = arr[1] - 1;
  const divisor = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisor.push(i);
    }
  }
  if (divisor[count] === undefined) {
    return 0;
  } else {
    return divisor[count];
  }
}

console.log(solution(input));