const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const firstLine = input.shift();



const solution = (arr, num) => {
  const [tNum, gNum] = num.split(" ").map(v => +v);
  let line = arr.split(" ").map(v => +v);
  let left = 0;
  let right = 0;
  let sum = line[0];
  let result = tNum + 1;
  while (left < tNum) {
    if (sum >= gNum) {
      if (right - left + 1 < result) {
        result = right - left + 1;
      }
      sum -= line[left];
      left++;
    } else if (sum < gNum) {
      right++;
      if (right === tNum) break;
      sum += line[right];
    }

  }
  if (result === tNum + 1) return 0
  else return result;
};

console.log(solution(input[0], firstLine));

