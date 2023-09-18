const fs = require("fs");

const input = +fs.readFileSync("/dev/stdin").toString();

function solution(num) {
  if (num > 0) {
    return num * solution(num - 1);
  } else {
    return 1;
  }
}


console.log(solution(input));