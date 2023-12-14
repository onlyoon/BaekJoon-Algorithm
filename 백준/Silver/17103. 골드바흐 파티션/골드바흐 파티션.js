const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(v => +v);
const firstLine = input.shift();

const solution = (num, arr) => {
  const maxPrimeNum = Math.max(...arr);
  const maxNumArr = Array(maxPrimeNum + 1).fill(0).map((v, i) => v = i);
  const result = [];
  for (let i = 2; i <= maxPrimeNum; i++) {
    if (maxNumArr[i] !== false) {
      for (let j = i * i; j <= maxPrimeNum; j += i) {
        if (j !== i && maxNumArr[j] !== false) {
          maxNumArr[j] = false;
        }
      }
    }
  }
  for (let i = 0; i < num; i++) {
    const primeNumArr = maxNumArr.filter((value, index) => value !== false && value !== 1 && value !== 0 && index < arr[i] - 1);
    let count = 0;
    let left = 0;
    let right = primeNumArr.length - 1;
    let sum;
    if (primeNumArr.indexOf(arr[i] / 2) !== -1) {
      count++;
    }
    while (left < right) {
      sum = primeNumArr[left] + primeNumArr[right];
      if (sum === arr[i]) {
        count++;
        left++;
      }
      if (sum < arr[i]) {
        left++;
      } else if (sum > arr[i]) {
        right--;
      }
    }
    result.push(count);
  }
  return result.join("\n");
};

console.log(solution(firstLine, input));

