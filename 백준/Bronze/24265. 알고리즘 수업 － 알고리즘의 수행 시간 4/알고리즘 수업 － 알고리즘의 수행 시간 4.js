const input = require("fs").readFileSync("/dev/stdin").toString().trim();
function solution(num) {
  let total = 0;
  let count = 0;
  for (let i = 1; i < num; i++) {
    count = i;
    total += count;
  }
  return +total;
}
console.log(solution(input));
console.log(2);
