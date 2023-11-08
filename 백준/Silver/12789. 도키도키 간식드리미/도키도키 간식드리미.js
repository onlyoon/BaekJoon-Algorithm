const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr, num) => {
    const stack = [];
    const result = [];
    const compareResult = Array(num).fill().map((v, i) => i + 1);
    const line = arr.split(" ").map(v => +v);
    let cur = 1;
    for (let i = 0; i < num; i++) {
        // console.log(i);
        // stack에 수가 있을 경우
        if (stack[stack.length - 1] === cur) {
            result.push(stack.pop());
            cur += 1;
            i--;
        } else if (line[i] === cur) {
            // line[i] 가 지금 순서에 맞을 경우
            result.push(line[i]);
            cur += 1;
        } else {
            // line[i] 가 지금 순서에 맞지 않을 경우
            stack.push(line[i]);
        }
    }
    const stackLength = stack.length;
    for (let j = 0; j < stackLength; j++) {
        // console.log(`j: `, j);
        result.push(stack.pop());
    }

    // console.log(stack);
    // console.log(result);
    if (JSON.stringify(compareResult) === JSON.stringify(result)) {
        return ('Nice');
    } else {
        return ('Sad');
    }
};

console.log(solution(input[1], +input[0]));
// solution(input);