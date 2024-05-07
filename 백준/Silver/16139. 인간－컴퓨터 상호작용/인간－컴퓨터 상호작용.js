const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// console.log(input);

const solution = (input) => {
    const string = input[0].split("");
    const result = [];
    // console.log(string1);
    const qCount = +input[1];
    for (let i = 2; i < qCount + 2; i++) {
        const [A, ls, rs] = input[i].split(" ");
        // console.log(A, +ls, +rs);
        const splicedArr = [...string].slice(+ls, +rs + 1);
        let count = 0;
        const regex = new RegExp(`${A}`, 'g');
        if (splicedArr.toString().match(regex) !== null) {
            count = splicedArr.join("").match(regex).length;
        }
        result.push(count);
    }
    return result.join("\n");
};

console.log(solution(input));