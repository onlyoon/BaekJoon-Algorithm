const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const firstLine = +input.shift();



const solution = (arr, num) => {
  const numbers = arr.split(" ").map(v => +v).sort((a, b) => a - b);

  // console.log(numbers);

  let left = 0;
  let right = num - 1;
  let result;
  let sumCompare = Number.MAX_SAFE_INTEGER;
  // console.log(sumCompare);
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    // 처음 값보다 높을 경우
    if (Math.abs(sum) < sumCompare) {
      result = (`${numbers[left]} ${numbers[right]}`);
      sumCompare = Math.abs(sum);
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

console.log(solution(input[0], firstLine, +input[1]));

