const fs = require("fs");

const input = +fs.readFileSync("/dev/stdin").toString().trim();

const recursion = (num) => {
    if (num === 1 || num === 0) {
        return 1;
    }
    return (num * recursion(num - 1));
};

console.log(recursion(input));