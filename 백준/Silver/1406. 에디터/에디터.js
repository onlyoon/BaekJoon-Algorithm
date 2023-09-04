const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


function solution(arr) {
  const [lStack, rStack] = [arr[0].split(""), []];
  // console.log(`lStack`, lStack, `rStack`, rStack);
  const secondLine = +arr[1];
  // console.log(`secondLine: `, secondLine);
  for (let i = 0; i < secondLine; i++) {
    const nLine = arr[i + 2].split(" ");
    if (nLine[0] === 'L') {
      if (lStack.length !== 0) {
        // console.log('execute L');
        rStack.push(lStack.pop());
        // console.log(`lStack: `, lStack, `rStack: `, rStack)
      }
    }
    else if (nLine[0] === 'D') {
      if (rStack[0] !== undefined) {
        lStack.push(rStack.pop());
        // console.log(`lStack: `, lStack, `rStack: `, rStack)
      }
    }
    else if (nLine[0] === 'B') {
      if (lStack.length !== 0) {
        // console.log('execute B');
        lStack.pop();
        // console.log(`lStack: `, lStack, `rStack: `, rStack)
      }
    }
    else if (nLine[0] === 'P') {
      // console.log('execute P');
      lStack.push(nLine[1]);
      // console.log(`lStack: `, lStack, `rStack: `, rStack)
    }
  }
  const finalResult = lStack.concat(rStack.reverse()).join("");
  return finalResult;
}

console.log(solution(input));
