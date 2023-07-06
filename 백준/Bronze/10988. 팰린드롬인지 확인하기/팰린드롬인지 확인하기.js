const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

//  단어가 짝수인지 홀수인지 파악
const count = input.length;
const isValidArr = [];
for (let i = 0; i < count / 2; i++) {
  let firstLetter = input.shift();
  let lastLetter = input.pop();
  if (lastLetter !== undefined) {
    if (firstLetter === lastLetter) {
      isValidArr.push(0);
    } else {
      isValidArr.push(1);
    }
  }
}
if (isValidArr.indexOf(1) !== -1) {
  console.log(0);
} else {
  console.log(1);
}
