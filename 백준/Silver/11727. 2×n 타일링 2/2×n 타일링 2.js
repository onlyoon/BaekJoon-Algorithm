const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const solution = (num) => {
  const memo = Array(num + 1).fill(1);
  for (let i = 2; i < memo.length; i++) {
    memo[i] = (memo[i - 2] * 2 + memo[i - 1]) % 10007;
  }
  return memo[num];
};

console.log(solution(input));

