
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim().split(" ");


console.log(input * input);

console.log(2);