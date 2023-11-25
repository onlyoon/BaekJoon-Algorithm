const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [tNum, count] = input.shift().split(" ").map(v => +v);

const solution = (num1, num2, arr) => {
  const nums = arr[0].split(" ").map(v => +v);
  let accumulator = [];
  accumulator.push(nums[0]);
  if (num1 === 1) {
    return nums[0];
  }
  for (let i = 1; i < num1; i++) {
    accumulator.push(nums[i] + accumulator[i - 1]);
    if (i >= num2) {
      accumulator[i] = accumulator[i] - nums[i - num2];
    }
  }
  accumulator = accumulator.slice(num2 - 1);
  // console.log(accumulator);
  return Math.max(...accumulator);
};

console.log(solution(tNum, count, input));

