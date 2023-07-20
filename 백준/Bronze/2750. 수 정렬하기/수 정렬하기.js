let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

input.shift();
const result = input.sort((a, b) => {
  return a - b;
});
console.log(result.join("\n"));