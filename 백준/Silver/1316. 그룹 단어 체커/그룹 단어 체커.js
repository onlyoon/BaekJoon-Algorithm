let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// 풀이
const firstLine = input.shift();
function solution(string) {
  let count = firstLine;
  for (let i = 0; i < firstLine; i++) {
    let wordLine = input.shift();
    const nextWordArr = [];
    for (let j = 0; j < wordLine.length; j++) {
      if (wordLine[j] !== wordLine[j + 1]) {
        // 해당 단어가 그 다음 단어와 같지 않다면
        if (nextWordArr.indexOf(wordLine[j]) === -1) {
          // 해당 단어가 nextWordArr 배열에 있니

          nextWordArr.push(wordLine[j]); // 없어면 집어 넣어
        } else {
          // 해당 단어가 nextWordArr 배열에 있다면?
          count--;
          break;
        }
      }
    }
  }

  return +count;
}

console.log(solution(input));
