let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim().split(" ");

const num1 = BigInt(input.shift());

const num2 = BigInt(input.shift());
console.log((num1 / num2).toString());

console.log((num1 % num2).toString());
