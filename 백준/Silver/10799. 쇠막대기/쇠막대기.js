const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString();

function solution(string) {
  const stringArr = string.trim().split("");
  const stringArrLength = stringArr.length;
  // 1. 레이저와 막대기를 분류한다.
  for (let i = 0; i < stringArrLength; i++) {
    if (stringArr[i] === ')') {
      if (stringArr[i - 1] === '(') {
        stringArr[i - 1] = '.';
        stringArr.splice(i, 1);
      }
    }
  }
  let i = 0;
  const stack = [];
  let count = 0;
  let count2 = 0;
  // 2. 레이저에 맞춰 레이저와 맞붙어 있는 막대기를 더한다.
  while (i < stringArrLength) {
    if (stringArr[i] === undefined) {
      break;
    }
    if (stringArr[i] === '(') {
      stack.push(stringArr[i]);
      count2 += 1;
    } else if (stringArr[i] === ')') {
      stack.pop();
    } else if (stringArr[i] === '.') {
      count += stack.length;

    }
    i++;
  }

  // 3. 총 막대기의 수를 출력값으로 준다.
  const result = count + count2;


  return result;
};

console.log(solution(input));
