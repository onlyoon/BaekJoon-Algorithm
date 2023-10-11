const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split(" ").map(v => +v);

function gcd(nArr, rArr) {
  let fNum = nArr[0];
  let sNum = nArr[1];
  let temp, n;
  if (fNum < sNum) {
    temp = fNum;
    fNum = sNum;
    sNum = temp;
  }
  while (sNum !== 0) {
    n = fNum % sNum;
    fNum = sNum;
    sNum = n;
  }

  rArr.push(fNum);
  return rArr;
}

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
  gcd(arr, result);
  lcm(arr, result);
  return result.join("\n");
};

console.log(solution(input));