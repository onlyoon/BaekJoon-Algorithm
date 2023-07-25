const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

function solution(arr) {
  const firstNum = arr[0];
  const secondNum = arr[1];
  const totalArr = [];
  const result = [];
  let total = 0;
  for (let i = firstNum; i <= secondNum; i++) {
    const countArr = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        countArr.push(j);
      }
    }
    if (countArr.length === 2) {
      totalArr.push(i);
    }
  }
  for (let i = 0; i < totalArr.length; i++) {
    total += totalArr[i];
  }
  if (totalArr[0] === undefined) {
    return -1;
  } else {
    result.push(total);
    result.push(totalArr[0]);
    return result.join("\n");
  }
}

console.log(solution(input));