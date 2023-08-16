const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
    const string = arr[0].split("");
    const frequencyCounter = {};
    let resultString = "";
    for (val of string) {
        frequencyCounter[val] = frequencyCounter[val] + 1 || 1;
    }

    for (key in frequencyCounter) {
        for (let i = 0; i < +frequencyCounter[key]; i++) {
            resultString += key;
        }
    }
    return console.log(resultString.split("").reverse().join(""));
}

solution(input);