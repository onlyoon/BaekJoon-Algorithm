const input = +require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

function solution(num) {
  if (num === 0) {
    return 1;
  }

  return num * solution(num - 1);
};

console.log(solution(input));

