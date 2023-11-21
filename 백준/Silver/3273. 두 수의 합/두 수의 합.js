const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const firstLine = +input.shift();



const solution = (arr, num, num2) => {
  const numbers = arr.split(" ").map(v => +v).sort((a, b) => a - b);
  // console.log(numbers);
  let left = 0;
  let right = num - 1;
  let count = 0;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === num2) {
      count += 1;
      left++;
    } else if (sum > num2) {
      right--;
    } else {
      left++;
    }
  }
  return count;
};

console.log(solution(input[0], firstLine, +input[1]));

