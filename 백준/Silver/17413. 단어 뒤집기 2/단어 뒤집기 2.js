const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

function solution(arr) {
  let tagStack = [];
  let stringStack = [];
  const resultStack = [];
  for (let i = 0; i < arr.length; i++) {
    // 만약 tagStack 스택에 '<'와 '>' 둘 다 있다면?
    if (tagStack[tagStack.length - 1] === '>') {
      resultStack.push(tagStack.join(""));
      tagStack = [];
    }
    // 만약 stringStack의 마지막이 ' '공백이라면?
    if (stringStack[stringStack.length - 1] === ' ') {
      stringStack.pop();
      resultStack.push(stringStack.reverse().join("") + ' ');
      stringStack = [];
    }

    // 만약 arr[i]가 '<'이라면?
    if (arr[i] === '<') {
      if (stringStack[0] !== undefined) {
        resultStack.push(stringStack.reverse().join(""));
        stringStack = [];
      }
      tagStack.push(arr[i]);
    }
    // 만약 arr[i]가 '<'이 아니라면?
    else {
      // 만약 tagStack에 '<'이 있다면?
      if (tagStack[0] === '<') {
        tagStack.push(arr[i]);
      }
      // 만약 tagStack에 '<'이 없다면?
      else {
        stringStack.push(arr[i]);
      }
    }
  }
  if (stringStack[0] !== undefined) {
    resultStack.push(stringStack.reverse().join("") + ' ');
    stringStack = [];
  }
  if (tagStack[0] !== undefined) {
    resultStack.push(tagStack.join(""));
    tagStack = [];
  }
  return resultStack.join("");
};

console.log(solution(input));
