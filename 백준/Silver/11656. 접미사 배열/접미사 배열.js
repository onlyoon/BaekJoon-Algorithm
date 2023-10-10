const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(arr) {
  let string = arr.split("");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= 1) {
      string.splice(0, 1);
      result.push(string.join("").trim());
    } else {
      result.push(string.join("").trim());
    }
  }
  result.sort();

  // result.sort((a, b) => {
  //   if (a[0].charCodeAt() === b[0].charCodeAt()) {
  //     let j = 0;
  //     while (a[j].charCodeAt() === b[j].charCodeAt()) {
  //       j += 1;
  //       if (a[j].charCodeAt() > b[j].charCodeAt()) {
  //         return a[j].charCodeAt() - b[j].charCodeAt();
  //       } else if (a[j].charCodeAt() < b[j].charCodeAt()) {
  //         return a[j].charCodeAt() - b[j].charCodeAt();
  //       }
  //     }
  //   }
  //   return a[0].charCodeAt() - b[0].charCodeAt();
  // })

  return result.join('\n').trim();
}

console.log(solution(input));