const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

const solution = (num) => {
    const arr = Array(num).fill(1n);
    for (let i = 2; i < num; i++) {
        arr[i] = BigInt(arr[i - 1] + arr[i - 2]);
    }
    return String(arr[num - 1]);
};

console.log(solution(input));