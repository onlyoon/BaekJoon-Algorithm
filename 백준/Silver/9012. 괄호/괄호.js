const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


function solution(arr) {
  const firstLine = +arr.shift();
  for (let i = 0; i < firstLine; i++) {
    const stackArr = [];
    const lineArr = arr[i].split("");
    // console.log(lineArr);
    for (let j = 0; j < lineArr.length; j++) {
      stackArr.push(lineArr[j]);
      if (lineArr[j] === ')') {
        if (stackArr[stackArr.length - 2] === "(") {
          stackArr.pop();
          stackArr.pop();
        } else {
        }
      }
      // console.log(`stackArr`, stackArr);
    }
    if (stackArr.length === 0) {
      console.log("YES");
    } else {
      console.log("NO")
    }
  }
}
solution(input);
