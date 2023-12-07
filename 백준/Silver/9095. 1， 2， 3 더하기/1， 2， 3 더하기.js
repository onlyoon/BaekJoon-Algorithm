const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(v => +v);

const solution = (arr) => {
  const firstLine = arr.shift();
  const result = [];
  for (let i = 0; i < firstLine; i++) {
    const DP = Array(arr[i]).fill(1);
    const DPLength = DP.length;
    let k = 0;
    if (DP.length > 1) {
      DP[2] = 2;
    }
    for (let j = 3; j <= DPLength; j++) {
      DP[j] = DP[j - 1] + DP[j - 2] + DP[j - 3];
      k++;
    }
    result.push(DP[DP.length - 1]);
  }
  return result.join("\n");
};

console.log(solution(input));

