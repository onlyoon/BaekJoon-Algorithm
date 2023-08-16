const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(num) {
  let count = 0;
  while (1) {
    if (num % 5 === 0) {
      count += num /= 5;
      return console.log(count);
    }
    if (num < 0) {
      return console.log(-1);
    }
    num -= 3;
    count++;
  }
}

solution(+input);