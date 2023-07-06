const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .toUpperCase()
  .trim()
  .split("");
let max = 0;
let maxNumber = {};
let term = {};
const wordCounter = {};
for (let val of input) {
  wordCounter[val] = (wordCounter[val] || 0) + 1;
}
for (let key in wordCounter) {
  if (max <= wordCounter[key]) {
    max = wordCounter[key];
    maxNumber = { maxkey: key, num: max };
    if (term.num === maxNumber.num && term.maxkey !== maxNumber.maxkey) {
    } else {
      term = maxNumber;
    }
  }
}
if (term.num === max && term.maxkey !== maxNumber.maxkey) {
  console.log("?");
} else {
  console.log(maxNumber.maxkey);
}
