const fs = require("fs");

const input = +fs.readFileSync("/dev/stdin").toString();

function solution(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = num - i; j > 0; j--) {
      process.stdout.write(' ');
    }
    for (let j = 0; j < i + (i - 1); j++) {
      process.stdout.write('*');
    }
    console.log();
  }
}

solution(+input);