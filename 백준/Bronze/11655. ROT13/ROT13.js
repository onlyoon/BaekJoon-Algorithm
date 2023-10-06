const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split(" ");
// console.log(input);

function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let resultArr = [];
    const line = arr[i].split("");
    for (let j = 0; j < line.length; j++) {
      let asciiCode = line[j].charCodeAt();
      if (asciiCode >= 65 && asciiCode <= 90) {
        asciiCode += 13;
        if (asciiCode > 90) {
          asciiCode = asciiCode - 90 + 64;
        }
      } else if (asciiCode >= 97 && asciiCode <= 122) {
        asciiCode += 13;
        if (asciiCode > 122) {
          asciiCode = asciiCode - 122 + 96;
        }
      }
      resultArr.push(String.fromCharCode(asciiCode));
    }
    result.push(resultArr.join(""));
  }
  return result.join(" ");
}

console.log(solution(input));