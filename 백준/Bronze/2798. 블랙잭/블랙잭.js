const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(arr) {
  const [cardNum, goalNum] = arr
    .shift()
    .split(" ")
    .map((v) => +v);
  const secondLine = arr
    .shift()
    .split(" ")
    .map((v) => +v);
  let i = 0;
  let j = 1;
  let k = 2;
  let result = 0;
  let sum = secondLine[0] + secondLine[1] + secondLine[2];

  while (i !== secondLine.length - 2) {
    sum = secondLine[i] + secondLine[j] + secondLine[k];
    if (sum <= goalNum) {
      if (sum >= result) {
        result = sum;
      }
    }
    if (j >= secondLine.length - 2 && k >= secondLine.length - 1) {
      ++i;
      j = i + 1;
      k = j + 1;
    } else if (k >= secondLine.length - 1) {
      ++j;
      k = j + 1;
    } else {
      k++;
    }
  }
  return result;
}

console.log(solution(input));
