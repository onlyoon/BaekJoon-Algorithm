let n = require("fs")
  .readFileSync("/dev/stdin").toString().trim();

const result = BigInt(n);

console.log(((result * (result - BigInt(1)) * (result - BigInt(2))) / BigInt(6)).toString());
console.log(3);