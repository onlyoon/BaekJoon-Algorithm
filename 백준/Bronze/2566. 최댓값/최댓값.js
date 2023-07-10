let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// 풀이


function solution(string) {
  arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].split(' ').length; j++) {
      let numberLine = input[i].split(' ');
      arr.push(numberLine[j]);
    }
  }

  let maxNum = Math.max(...arr);
  let row = (arr.indexOf(`${maxNum}`) + 1) / 9;
  let column = (arr.indexOf(`${maxNum}`) + 1) % 9;
  if ((arr.indexOf(`${maxNum}`) + 1) % 9 === 0) {
    column = 9;
  }
  console.log(maxNum);
  console.log(Math.ceil(row), column);
}

solution(input);
