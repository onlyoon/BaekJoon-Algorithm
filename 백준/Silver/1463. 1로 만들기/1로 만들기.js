const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = (num) => {
  const DP = Array(num + 1);
  DP[0] = 0;
  DP[1] = 0;

  for (let i = 2; i <= num; i++) {
    DP[i] = DP[i - 1] + 1;
    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2] + 1);
    }
    if (i % 3 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 3] + 1);
    }
  }
  return DP[num];
};

console.log(solution(input));

