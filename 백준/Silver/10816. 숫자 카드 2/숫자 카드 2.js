const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (input) => {
    const object = {}
    const firstLine = input[0]
    const secondLine = input[1].split(" ")
    const thirdLine = input[2]
    const forthLine = input[3].split(" ")
    const result = []

    for (let i = 0; i < +firstLine; i++) {
        object[secondLine[i]] = (object[secondLine[i]] || 0) + 1;
    }

    for (let i = 0; i < +thirdLine; i++) {
        result.push((object[forthLine[i]] || 0))
    }

    return result.join(" ");
};

console.log(solution(input));
