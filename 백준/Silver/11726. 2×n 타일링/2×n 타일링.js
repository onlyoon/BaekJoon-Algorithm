const input = +require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const solution = (num) => {
  const memo = Array(num).fill(1);
  memo[1] = 1;
  memo[2] = 2;
  for (let i = 3; i <= num; i++) {
    memo[i] = (memo[i - 2] + memo[i - 1]) % 10007;
  }
  return memo[num]; // 9
};

console.log(solution(input));

