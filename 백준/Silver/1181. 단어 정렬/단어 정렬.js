let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n').sort();

function solution(arr) {
  input.shift();

  const wordCounter = [];

  let prevVal;
  for (let val of arr) {
    if (prevVal !== val) {
      wordCounter.push({alphabet: val, length: val.length});
    }
    prevVal = val;
  }
  const lengthResult = wordCounter.sort(function (a, b) {
    return a.length - b.length;
  })
  for (let val of lengthResult) {
    console.log(val.alphabet);
  }
}


solution(input);
