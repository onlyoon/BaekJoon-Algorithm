let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const count = input.length;
function solution(arr) {
  for (let i = 0; i < count - 1; i++) {
    let problemLine = input.shift().split(" ");
    if (problemLine[1] % problemLine[0] === 0) {
      console.log("factor");
    } else if (problemLine[0] % problemLine[1] === 0) {
      console.log("multiple");
    } else {
      console.log("neither");
    }
  }
}

solution(input);