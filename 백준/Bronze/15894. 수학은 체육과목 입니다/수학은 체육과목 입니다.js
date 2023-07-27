let input = +require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(num) {
  const result = num * 4;
  return console.log(result);
}

solution(input);
