let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// 풀이

function solution(string) {
  const [n, m] = string.shift().split(' ');
  const arrA = [];
  const arrB = [];
  const arrTotal = [];
  const arrPlus = [];
  let a;
  for (let i = 0; i < n; i++) {
    let matrix = input
      .shift()
      .split(' ')
      .map((v) => +v);
    arrA.push(matrix);
  }
  for (let i = 0; i < n; i++) {
    let matrix = input
      .shift()
      .split(' ')
      .map((v) => +v);
    arrB.push(matrix);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      arrPlus[j] = arrA[i][j] + arrB[i][j];
    }
    a = arrPlus.join(' ');
    arrTotal.push(a);
  }

  return arrTotal.join('\n');
}
console.log(solution(input));
