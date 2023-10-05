const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// console.log(input);

function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let lowercase = 0;
    let uppercase = 0;
    let num = 0;
    let space = 0;

    const line = arr[i].split("");
    // console.log(line);
    for (let j = 0; j < line.length; j++) {
      let asciiCode = line[j].charCodeAt();
      if (asciiCode >= 97 && asciiCode <= 122) {
        lowercase += 1;
      } else if (asciiCode >= 65 && asciiCode <= 90) {
        uppercase += 1;
      } else if (asciiCode >= 48 && asciiCode <= 57) {
        num += 1;
      } else {
        space += 1;
      }
    }
    if (lowercase !== 0 || uppercase !== 0 || num !== 0 || space !== 0) {
      const sArr = [lowercase, uppercase, num, space];
      result.push(sArr.join(" "));
    }

  }
  return result.join("\n");
}

console.log(solution(input));