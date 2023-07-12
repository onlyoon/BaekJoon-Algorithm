const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

function solution(string) {
  const firstLine = string
    .shift()
    .split(' ')
    .map((v) => +v);
  const N = firstLine[0];
  const M = firstLine[1];
  const arr = string
    .shift()
    .split(' ')
    .map((v) => +v);
  let start = 0;
  let result = 0;
  let sum = 0;

  while (start !== N) {
    let end = start + 1;
    if (arr[start] === M) {
      result++;
    }
    sum = arr[start] + arr[end];
    if (sum <= M) {
      if (sum === M) {
        result++;
      } else {
        while (sum <= M) {
          ++end;
          sum += arr[end];
          if (sum === M) {
            result++;
          }
        }
      }
    }
    sum = 0;

    start++;
  }

  return result;
}
console.log(solution(input));
