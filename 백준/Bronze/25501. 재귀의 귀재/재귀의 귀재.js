const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


function solution(arr) {
  const firstLine = arr[0];
  let result = [];
  for (let i = 1; i <= firstLine; i++) {
    const textArr = arr[i].split("");
    let j = 0;
    let k = textArr.length - 1;
    let count = 1;
    // console.log(textArr.length);
    if (textArr.length % 2 === 1) {
      // console.log(`textArr(odd): `, textArr);
      oddRecursion(textArr, result, j, k, count);
    } else {
      // console.log(`textArr(even): `, textArr);
      evenRecursion(textArr, result, j, k, count);
    }
  }
  return result.join("\n");
}

function oddRecursion(arr, resultArr, sIndex, eIndex, count) {
  if (sIndex === eIndex) {
    return resultArr.push([`1 ${count}`]);
  }
  if (arr[sIndex] === arr[eIndex]) {
    // console.log("홀수 재귀 호출");
    oddRecursion(arr, resultArr, sIndex + 1, eIndex - 1, count + 1);
  } else {
    return resultArr.push([`0 ${count}`]);
  }
}

function evenRecursion(arr, resultArr, sIndex, eIndex, count) {
  // console.log(`sIndex: `, sIndex);
  // console.log(`arr.length: `, arr.length / 2 - 1);
  if (sIndex === Math.ceil(arr.length / 2 - 1) && arr[sIndex] === arr[eIndex]) {
    return resultArr.push([`1 ${count + 1}`]);
  }
  if (arr[sIndex] === arr[eIndex]) {
    // console.log("짝수 재귀 호출");
    evenRecursion(arr, resultArr, sIndex + 1, eIndex - 1, count + 1);
  } else {
    return resultArr.push([`0 ${count}`]);
  }
}



console.log(solution(input));