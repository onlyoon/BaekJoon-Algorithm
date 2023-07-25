const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);
const count = input.length - 1;

function solution(arr) {
  for (let i = 0; i < count; i++) {
    let perfectN = [];
    let total = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0 && j !== arr[i]) {
        perfectN.push(j);
        total += j;
      }
    }
    if (total === arr[i]) {
      process.stdout.write(`${arr[i]} = `);
      process.stdout.write(perfectN.join(" + "));
      console.log("");
    } else {
      process.stdout.write(`${arr[i]} is NOT perfect.`);
      console.log("");
    }
  }
}
solution(input);
    