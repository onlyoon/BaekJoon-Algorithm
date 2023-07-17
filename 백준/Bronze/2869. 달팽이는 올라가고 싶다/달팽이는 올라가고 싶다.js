const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const up = input[0] - input[1];
const down = input[1];
let height = input[2];
let currentSnail = 0;
let day = 0;

const result = (height - down) / up;

console.log(Math.ceil(result));
