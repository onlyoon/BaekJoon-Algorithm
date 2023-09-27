const fs = require("fs");

// 모듈로 텍스트 파일을 읽어온 뒤, 문자열로 만들고, 자잘한 것들을 제거하고, 개행문자로 나누어 입력값을 배열로서 활용한다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


function solution(arr) {
  const result = [];
  // 입력값 별로 루프 문을 돌린다.
  for (let i = 0; i < arr.length; i++) {
    // 입력받은 숫자에 따라 문자열을 만든다.
    const stringArr = new Array(3 ** arr[i]).fill("-");
    let tempStringArr = new Array(3 ** arr[i]).fill("-");
    // console.log(`stringArr: `, stringArr.join(""));
    // console.log(`stringArr.length: `, stringArr.length);
    // console.log(`tempStringArr: `, `|${tempStringArr.join("")}|`);
    let count = 0;
    let index = 0;
    result.push(recursion(stringArr, tempStringArr, result, count, index));
  }
  return result.join("\n");
}

function recursion(string, tempString, result, count, index) {
  // 문자열의 길이가 --- 이상이면
  if (string.length / 3 >= 1) {
    const sLength = string.length;
    const divide3 = sLength / 3;
    // 만들어진 문자열을 string으로 3등분한다.
    // 3등분 왼쪽 값이 알맞지 않을 경우
    const leftString = string.splice(0, divide3);
    recursion(leftString, tempString, result, count + 1, index);
    // 3등분 가운데 값
    const middleString = string.splice(0, divide3);
    const middle = " ";
    for (let i = 0; i < middleString.length; i++) {
      tempString[index + middleString.length + i] = middle;
    }
    // 3등분 오른쪽 값
    index += divide3 * 2;
    const rightString = string.splice(0, divide3);
    recursion(rightString, tempString, result, count + 1, index);
  }
  if (count === 0) {
    return tempString.join("");
  }
}




console.log(solution(input));