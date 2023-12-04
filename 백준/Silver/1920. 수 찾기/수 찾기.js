const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const binarySearch = (arr, findNum) => {
  let top = arr.length - 1;
  let bottom = 0;
  let mid;
  let midTemp;
  while (1) {
    mid = Math.floor((top + bottom) / 2);
    if (midTemp === mid) {
      return 0;
    }
    if (arr[mid] === findNum || arr[top] === findNum || arr[bottom] === findNum) {
      return 1;
    } else {
      if (arr[mid] > findNum) {
        top = mid;
        midTemp = mid;
      } else if (arr[mid] < findNum) {
        bottom = mid;
        midTemp = mid;
      }
    }
  }
  return 0;
};

const solution = (arr) => {
  const secondLine = arr[1].split(" ").map(v => +v).sort((a, b) => a - b);
  const forthLine = arr[3].split(" ").map(v => +v);
  const result = [];
  for (let i = 0; i < forthLine.length; i++) {
    result.push(binarySearch(secondLine, forthLine[i]));
  }
  return result.join("\n");
};

console.log(solution(input));

