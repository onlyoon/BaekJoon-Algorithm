const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => +v);

const solution = (arr) => {
    arr.sort((a, b) => b - a);
    let result = arr.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    let aDwarf = 0;
    let bDwarf = 1;
    let process;
    while (result !== 100) {
        process = result;
        process = process - arr[aDwarf] - arr[bDwarf];
        if (process !== 100) {
            bDwarf++;
            if (bDwarf === arr.length) {
                aDwarf++;
                bDwarf = aDwarf + 1;
            }
        } else {
            let a = arr.indexOf(arr[aDwarf]);
            arr.splice(a, 1);
            let b = arr.indexOf(arr[bDwarf - 1]);
            arr.splice(b, 1);
            arr.sort((a, b) => a - b);
            break;
        }
    }
    return arr.join("\n");
};

console.log(solution(input));