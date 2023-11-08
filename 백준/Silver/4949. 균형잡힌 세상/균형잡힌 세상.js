const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const stack = [];
        if (arr[i] === ".") {
            continue;
        }
        const string = arr[i].replace(/[\w\s]/g, '');
        // console.log(string);
        for (let j = 0; j < string.length; j++) {
            // console.log(string[j]);
            if (string[j] === "(" || string[j] === "[") {
                stack.push(string[j]);
                // console.log('push');
            }
            else if (string[j] === "]") {
                if (stack[stack.length - 1] === "[") {
                    stack.pop();
                } else {
                    stack.push(string[j]);
                }
            }
            else if (string[j] === ")") {
                if (stack[stack.length - 1] === "(") {
                    stack.pop();
                } else {
                    stack.push(string[j]);
                }
            } else if (string[j] === ".") {
                if (stack[0] !== undefined) {
                    result.push("no");
                    // console.log("no");
                } else {
                    result.push("yes");
                    // console.log("yes");
                }
            }
        }
        // console.log(`stack: `, stack);

    }
    return result.join("\n");
};

console.log(solution(input));
// solution(input);