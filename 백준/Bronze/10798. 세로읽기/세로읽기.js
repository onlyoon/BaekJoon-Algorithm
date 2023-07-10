let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// 풀이

function solution(string) {
  let n = 0;
  let sentences = [];
  for (let j = 0; j < 15; j++) {

    for (let i = 0; i < 5; i++) {
      let words = string[i].split('').splice(n, 1).toString();
      sentences.push(words);
    }
    n++;
  }
  return console.log(sentences.join(''));
}

solution(input);