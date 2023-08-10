let input = +require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim();

function solution(num) {
  let compareNum = num;
  const arr = [];
  while (compareNum !== 0) {
    let [a, b, c, d, e, f] = compareNum.toString().split("").map(v => +v);
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 0;
    }
    if (c === undefined) {
      c = 0;
    }
    if (d === undefined) {
      d = 0;
    }
    if (e === undefined) {
      e = 0;
    }
    if (f === undefined) {
      f = 0;
    }
    if (compareNum + a + b + c + d + e + f === num) {
      arr.push(compareNum);
      compareNum--;
    } else {
      compareNum--;
    }
  }
  if (arr.length === 0) {
    return console.log(0);
  } else {
    return console.log(arr.pop());
  }
}


solution(input);