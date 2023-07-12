const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

function solution(string) {
  const firstLine = string.shift();
  const arr = [25, 10, 5, 1];
  for (let i = 0; i < firstLine; i++) {
    for (let j = 0; j < arr.length; j++) {
      let coinCount = input[i] / arr[j];
      let coin = Math.floor(coinCount);
      input[i] -= coin * arr[j];
      process.stdout.write(coin + ' ');
    }

    console.log();
  }
}
solution(input);