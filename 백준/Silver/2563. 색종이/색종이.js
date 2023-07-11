let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// 풀이

const firstLine = +input.shift();

const drawingPaper = [];
const arr = new Array(100).fill(0);
for (let i = 0; i < 100; i++) {
  drawingPaper.push(arr.slice());
}

for (let j = 0; j < firstLine; j++) {
  let [x, y] = input.shift().split(' ');
  for (let k = 0; k < 10; k++) {
    drawingPaper[+y][+x + k] = 1;
    drawingPaper[+y + 1][+x + k] = 1;
    drawingPaper[+y + 2][+x + k] = 1;
    drawingPaper[+y + 3][+x + k] = 1;
    drawingPaper[+y + 4][+x + k] = 1;
    drawingPaper[+y + 5][+x + k] = 1;
    drawingPaper[+y + 6][+x + k] = 1;
    drawingPaper[+y + 7][+x + k] = 1;
    drawingPaper[+y + 8][+x + k] = 1;
    drawingPaper[+y + 9][+x + k] = 1;
  }
}

let count = 0;
for (let i = 0; i < 100; i++) {
  const oneNumber = drawingPaper[i].filter((val) => {
    return val > 0;
  });
  count += oneNumber.length;
}
console.log(count);
