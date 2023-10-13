const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split("\n");

// console.log(input);

function lcm(nArr, rArr) {
  let fNum = nArr[0];
  let sNum = nArr[1];
  if (fNum !== sNum) {
    while (1) {
      if (fNum > sNum) {
        sNum += nArr[1];
      } else {
        fNum += nArr[0];
      }
      if (fNum === sNum) {
        break;
      }
    }
  }
  rArr.push(fNum);
  return rArr;
}

function solution(arr) {
  const result = [];
  const firstLine = +arr[0];
  for (let i = 0; i < firstLine; i++) {
    const line = input[i + 1].split(" ").map(v => +v);
    // console.log(line);
    lcm(line, result);
  }
  return result.join("\n");
};

console.log(solution(input));