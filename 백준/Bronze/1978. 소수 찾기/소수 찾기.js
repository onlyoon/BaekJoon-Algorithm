let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(arr) {
  let count = 0;
  const firstLine = arr.shift();
  const num = arr[0].split(" ").map((v) => +v);
  for (let i = 0; i < firstLine; i++) {
    const primeNumber = [];
    for (let j = 1; j <= num[i]; j++) {
      if (num[i] % j === 0) {
        primeNumber.push(j);
      }
    }
    if (primeNumber.length === 2) {
      count++;
    }
  }
  return count;
}

console.log(solution(input));
