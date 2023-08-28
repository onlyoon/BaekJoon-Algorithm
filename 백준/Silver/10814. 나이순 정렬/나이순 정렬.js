const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
function solution(arr) {
  const firstLine = arr.shift();
  const newArr = [];
  for (let i = 0; i < firstLine; i++) {
    newArr.push(arr[i].split(" "));
  }
  // console.log(`newArr: `, newArr);

  const result = [...newArr].sort((a, b) => {
    // if (a[0] === b[0]) {
    //   a[0] - b[0];
    // }
    return a[0] - b[0];
  });

  return result.join("\n").replace(/,/g, " ");
}
console.log(solution(input));
