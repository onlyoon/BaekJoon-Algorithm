const fs = require("fs");

const input = +fs.readFileSync("/dev/stdin").toString().trim();


function solution(num) {
  // console.log(num);
  let star = num;
  let nonStar = 0;
  const result = [];
  for (let j = 0; j < num; j++) {
    let string = "";
    for (let i = 0; i < nonStar; i++) {
      string = string + " ";
    }
    for (let i = 0; i < star; i++) {

      string = string + "*";
    }
    result.push(string);
    star -= 1;
    nonStar += 1;
  }
  return result.join("\n");
}


console.log(solution(input));