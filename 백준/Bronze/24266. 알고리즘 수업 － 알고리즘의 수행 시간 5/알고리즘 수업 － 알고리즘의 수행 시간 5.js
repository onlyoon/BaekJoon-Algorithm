const input = require("fs").readFileSync("/dev/stdin").toString().trim();
function solution(num) {
  let realNum = BigInt(input);
  console.log(`${realNum * realNum * realNum}`);
}
solution(input);
console.log(3);
