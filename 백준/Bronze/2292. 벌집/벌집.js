const input = require("fs").readFileSync("/dev/stdin").toString();

let a = 2;
let n = 1;
function solution(num) {
  if (num === 1) {
    return 1;
  } else {
    while (num >= a) {
      a += 6 * n;
      n++;
    }
      return n;
  }
}

console.log(solution(+input));