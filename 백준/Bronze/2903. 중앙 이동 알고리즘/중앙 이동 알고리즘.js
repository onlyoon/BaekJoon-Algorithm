const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

function solution(string) {
  const arr = new Array(15).fill().map((arr, i) => {
    return i;
  });

  let n = 2;
  for (let j = 0; j < input; j++) {
    n += 2 ** arr[j];
  }
  return (n * n);
}

console.log(solution(input));