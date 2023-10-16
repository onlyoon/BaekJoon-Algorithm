const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim();

function solution(num) {
  let count2 = 0;
  let count5 = 0;
  for (let i = 1; i <= num; i++) {
    let numForCount = i;
    for (let j = 1; j <= numForCount; j++) {
      if (numForCount % 2 === 0) {
        count2 += 1;
        numForCount /= 2;
      }
      if (numForCount % 5 === 0) {
        count5 += 1;
        numForCount /= 5;
      }
    }
  }
  if (count2 > count5) {
    return count5;
  } else {
    return count2;
  }
};

// const regex = `${solution(+input)}`;
console.log(solution(input));
