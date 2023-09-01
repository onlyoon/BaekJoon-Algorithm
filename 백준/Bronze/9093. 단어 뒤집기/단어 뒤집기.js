const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


function solution(arr) {
  const stackArr = [];
  const firstLine = +arr.shift();
  // console.log(firstLine);
  for (let i = 0; i < firstLine; i++) {
    const reversedArr = arr.shift().split("").reverse();
    let reversedString = reversedArr.join("").split(" ");
    const reversedStringLength = reversedString.length;
    for (let j = 0; j < reversedStringLength; j++) {
      stackArr.push(reversedString[j]);
    }
    const result = [];
    for (let j = 0; j < reversedStringLength; j++) {
      result.push(stackArr.pop());
    }
    console.log(result.join(" "));
  }
}
solution(input);
