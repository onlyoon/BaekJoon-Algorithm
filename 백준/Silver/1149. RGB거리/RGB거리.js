const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


const solution = (array) => {
    const [N, ...homes] = array.map(v => v.split(" ").map(Number))
    const dp = homes
    for (let i = 1; i < N; i++) {
        dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2])
        dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2])
        dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1])
    }
    return Math.min(...dp[N - 1])
};

console.log(solution(input))
