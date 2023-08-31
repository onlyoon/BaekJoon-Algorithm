const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
function solution(arr) {
  const firstLine = arr
    .shift()
    .split(" ")
    .map((v) => +v);
  // console.log(firstLine);
  const secondLine = +arr.shift();
  // console.log(secondLine);
  const thirdLine = +arr.shift();
  // console.log(thirdLine);

  if (
    firstLine[0] * thirdLine + firstLine[1] <= secondLine * thirdLine &&
    secondLine >= firstLine[0]
  ) {
    return 1;
  } else {
    return 0;
  }
}
console.log(solution(input));
