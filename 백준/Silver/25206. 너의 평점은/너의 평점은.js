let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// TODO: 제출 시 경로 변환 필수 ("/dev/stdin")
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
// 풀이
const scoreNum = input.length;

function solution(string) {
  let totalScore = 0;
  let totalCredit = 0;
  for (let i = 0; i < scoreNum; i++) {
    let classScore = input.shift().split(' ');
    if (classScore[2] !== 'P') {
      totalCredit += +classScore[1];
    }
    let subjectScore;
    switch (classScore[2]) {
      case 'A+': 
        subjectScore = 4.5;
        break;

      case 'A0': 
        subjectScore = 4.0;
        break;

      case 'B+': 
        subjectScore = 3.5;
        break;

      case 'B0': 
        subjectScore = 3.0;
        break;

      case 'C+': 
        subjectScore = 2.5;
        break;

      case 'C0': 
        subjectScore = 2.0;
        break;

      case 'D+': 
        subjectScore = 1.5;
        break;

      case 'D0': 
        subjectScore = 1.0;
        break;

      case 'F': 
        subjectScore = 0.0;
        break;

      default:
        subjectScore = 0.0;
        break;
    }
    totalScore += +classScore[1] * +subjectScore;
  }
  return (totalScore / totalCredit).toFixed(6);
}

console.log(solution(input));