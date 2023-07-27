let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(arr) {
  const frequencyCounterLeft = {};
  const frequencyCounterRight = {};
  const result = [];
  const count = arr.length;
  for (let i = 0; i < count; i++) {
    const dot = arr[i].split(" ").map(v=> +v);
      frequencyCounterLeft[dot[0]] = (frequencyCounterLeft[dot[0]] || 0) + 1;
      frequencyCounterRight[dot[1]] = (frequencyCounterRight[dot[1]] || 0) + 1;
  }
  for (let val in frequencyCounterLeft) {
    if (frequencyCounterLeft[val] === 1) {
      result.push(val);
    }
  }
  for (let val in frequencyCounterRight) {
    if (frequencyCounterRight[val] === 1) {
      result.push(val);
    }
  }

  return console.log(result.join(" "));
}

solution(input);