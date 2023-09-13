const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim().split("\n");

const push_front = (X, arr) => {
    arr.splice(0, 0, X);
    return arr;
};

const push_back = (X, arr) => {
    arr.push(X);
    return arr;
};

const pop_front = (arr, arr2) => {
    if (arr[0] === undefined) {
        arr2.push(-1);
    } else {
        arr2.push(+arr.splice(0, 1));
    }
};

const pop_back = (arr, arr2) => {
    if (arr[0] === undefined) {
        arr2.push(-1);
    } else {
        arr2.push(+arr.pop());
    }
};

const size = (arr, arr2) => {
    arr2.push(arr.length);
};

const empty = (arr, arr2) => {
    if (arr[0] === undefined) {
        arr2.push(1);
    } else {
        arr2.push(0);
    }
};

const front = (arr, arr2) => {
    if (arr[0] === undefined) {
        arr2.push(-1);
    } else {
        arr2.push(+arr[0]);
    }
};

const back = (arr, arr2) => {
    if (arr[0] === undefined) {
        arr2.push(-1);
    } else {
        arr2.push(+arr[arr.length - 1]);
    }
};

function solution(arr) {
    const deque = [];
    const result = [];
    const firstLine = +arr[0];
    for (let i = 1; i < firstLine + 1; i++) {
        const line = arr[i].split(" ");
        switch (line[0]) {
            case 'push_front':
                push_front(line[1], deque);
                break;
            case 'push_back':
                push_back(line[1], deque);
                break;
            case 'pop_front':
                pop_front(deque, result);
                break;
            case 'pop_back':
                pop_back(deque, result);
                break;
            case 'size':
                size(deque, result);
                break;
            case 'empty':
                empty(deque, result);
                break;
            case 'front':
                front(deque, result);
                break;
            case 'back':
                back(deque, result);
                break;
        }
    }

    return result.join("\n");
};

console.log(solution(input));

