const input = +require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();


function solution(num) {
  const result = [];
  let count = 1;
  for (let i = 0; i < num; i++) {
    result.push(count);
    count++;
  }
  return result.join("\n");
};

console.log(solution(input));

