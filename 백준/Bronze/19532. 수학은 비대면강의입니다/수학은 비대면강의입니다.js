let input = require("fs")
  .readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);

function solution(input) {
  let [a, b, c, d, e, f] = input;
  const res = [];
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        res.push(i);
        res.push(j);
      }
    }
  }
  return console.log(res.join(" "));
}


solution(input);