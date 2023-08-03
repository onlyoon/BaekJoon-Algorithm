let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(arr) {
  const triangles = arr;
  const line = triangles.length - 1;
  // console.log(line);
  for (let i = 0; i < line; i++) {
    const numArr = triangles.shift().split(" ").map(v => +v);
   // console.log(numArr);
    const [a, b, c] = numArr;
    if (a + b <= c || b + c <= a || a + c <= b) {
      console.log('Invalid');
    } else {
      if (a === b && b === c) {
        console.log("Equilateral");
      } else {
        if (a === b || b === c || c === a) {
          console.log("Isosceles");
        } else {
          console.log("Scalene")
        }
      }
    }
  }
}

solution(input);