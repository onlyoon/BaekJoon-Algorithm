const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  const firstLine = arr.shift();

  const newArr = [];

  for (let i = 0; i < firstLine; i++) {
    newArr.push(arr[i].split(" ").map(v => +v));
  }

  const newNewArr = [...newArr].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  return newNewArr.join("\n").replace(/,/g, " ");
}

console.log(solution(input));