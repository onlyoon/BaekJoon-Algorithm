const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const firstLine = input.shift();

const push = (arr, stack) => {
    const pushArr = arr.split(" ").map(v => +v);
    stack.push(pushArr[1]);
    return stack;
};

const popTopPrint = (stack, result) => {
    if (stack[0] !== undefined) {
        result.push(stack.pop());
    } else {
        result.push(-1);
    }
};

const stackSize = (stack, result) => {
    result.push(stack.length);
};

const isEmpty = (stack, result) => {
    if (stack[0] !== undefined) {
        result.push(0);
    } else {
        result.push(1);
    }
};

const keepTopPrint = (stack, result) => {
    if (stack[0] !== undefined) {
        result.push(stack[stack.length - 1]);
    } else {
        result.push(-1);
    }
};


const solution = (arr, num) => {
    const result = [];
    const stack = [];
    // console.log(arr, num);
    for (let i = 0; i < num; i++) {
        // console.log(arr[i][0]);
        switch (arr[i][0]) {
            case '1':
                push(arr[i], stack);
                break;
            case '2':
                popTopPrint(stack, result);
                break;
            case '3':
                stackSize(stack, result);
                break;
            case '4':
                isEmpty(stack, result);
                break;
            case '5':
                keepTopPrint(stack, result);
                break;
        }
    }
    return result.join("\n");
};

console.log(solution(input, firstLine));