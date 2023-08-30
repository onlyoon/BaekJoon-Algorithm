const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


function solution(arr) {
  const firstLine = +arr.shift();
  const newArr = arr[0].split(" ").map(v => +v);
  const sortedArr = [...newArr].map(v => +v).sort((a, b) => {
    return a - b;
  });
  const mapArr = new Map();
  let j = 0;
  for (let i = 0; i < firstLine; i++) {
    const isDuplicated = sortedArr[i];
    if (!mapArr.has(isDuplicated)) {
      mapArr.set(isDuplicated, j);
      j++;
    }
  }
  let result = '';
  newArr.forEach((val) => {
    result += mapArr.get(val) + " ";
  })

  return result;
}
console.log(solution(input));
