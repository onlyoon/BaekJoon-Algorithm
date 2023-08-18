const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const firstLine = +input.shift();

const newArr = [];

for (let i = 0; i < firstLine; i++) {
  newArr.push(input[i].split(" ").map(v => +v));
}

newArr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

const resultArr = [];

for (let i = 0; i < firstLine; i++) {
  let result = newArr[i].join(" ");
  resultArr.push(result);
}
console.log(resultArr.join("\n"));
