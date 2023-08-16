const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  const firstLine = arr.shift().split(" ").map(v => +v);
  const secondLine = arr[0].split(" ").map(v => +v);
  let cutLine;
  for (let i = 0; i < firstLine[1]; i++) {
    let maxElement = secondLine.reduce((a, b) => {
      return Math.max(a, b);
    });
    let out = secondLine.indexOf(maxElement);
    cutLine = secondLine.splice(out, 1);
  }

  return console.log(cutLine[0]);
}

solution(input);