const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function push(num, arr) {
  arr.push(num);
  // console.log("push");
  return arr;
}

function pop(arr, arr2) {
  // console.log("pop");
  if (arr[0] === undefined) {
    arr2.push(-1);
  } else {
    arr2.push(arr.pop());
  }
  return arr;
}

function size(arr, arr2) {
  // console.log("size");
  return arr2.push(arr.length);
}

function empty(arr, arr2) {
  // console.log("empty");
  if (arr[0] === undefined) {
    return arr2.push(1);
  } else {
    return arr2.push(0);
  }
}

function top(arr, arr2) {
  // console.log("top");
  if (arr[0] === undefined) {
    return arr2.push(-1);
  } else {
    const final = arr.length;
    return arr2.push(arr[final - 1]);
  }
}

function solution(arr) {
  const stack = [];
  const result = [];
  const firstLine = +arr.shift();
  for (let i = 0; i < firstLine; i++) {
    const line = arr.shift().split(" ");
    switch (line[0]) {
      case "push":
        push(+line[1], stack);
        break;
      case "pop":
        pop(stack, result);
        break;
      case "size":
        size(stack, result);
        break;
      case "empty":
        empty(stack, result);
        break;
      case "top":
        top(stack, result);
        break;
      default:
        break;
    }
  }
  return result.join("\n");
}
console.log(solution(input));
