const fs = require("fs");

const input = fs.readFileSync("/dev/stdin");

let a = input;
const arr = [];
for (let i = 0; i < input; i++) {
  arr.push(+a);
  a--;
}

console.log(arr.join("\n"));