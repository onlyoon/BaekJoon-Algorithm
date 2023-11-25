const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [tNum, count] = input.shift().split(" ").map(v => +v);

const solution = (num1, num2, arr) => {
  const nums = arr[0].split(" ").map(v => +v);
  const result = [];
  const accumulator = [0];
  for (let i = 0; i < nums.length + 1; i++) {
    if (i === 0) {
      continue;
    }
    if (i === 1) {
      accumulator[i] = nums[i - 1];
    } else {
      accumulator[i] = accumulator[i - 1] + nums[i - 1];
    }
    // console.log(`accumulator: `, accumulator);
  }
  for (let j = 1; j <= num2; j++) {
    const [first, last] = arr[j].split(" ").map(v => +v);
    result.push(accumulator[last] - accumulator[first - 1]);
    // console.log(accumulator[last]);
    // console.log(accumulator[first - 1]);
    // console.log(`result: `, result);
  }
  // console.log(num1);
  // console.log(num2);
  return (result.join("\n"));

};

console.log(solution(tNum, count, input));

