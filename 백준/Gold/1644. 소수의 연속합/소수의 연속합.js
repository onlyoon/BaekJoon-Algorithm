const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = (num) => {
  if (num === 1) {
    return 0;
  }
  const arr = Array(num).fill().map((item, index) => index = index);
  arr.push(num);
  // 2의 숫자 전체 제거
  for (let i = 2; i <= num; i++) {
    let first = true;
    if (arr[i] === false) {
      continue;
    }
    for (let j = i; j <= num; j += i) {
      if (first === false) {
        arr[j] = false;
      }
      first = false;
    }
  }
  let twoPointerArr = arr.filter((value) => value !== false);
  let left = 2;
  let right = left + 1;
  let sum = twoPointerArr[left];
  let count = 0;
  while (left < twoPointerArr.length - 1) {
    sum += twoPointerArr[right];
    // 만약 sum이 소수의 합과 같을 경우
    if (sum === num) {
      count++;
      left++;
      sum = twoPointerArr[left];
      right = left + 1;
      // 만약 sum이 소수의 합보다 클 경우
    } else if (sum > num) {
      left++;
      sum = twoPointerArr[left];
      right = left + 1;
      // 만약 sum이 소수의 합보다 작을 경우
    } else {
      right++;
    }
  }
  if (twoPointerArr.indexOf(num) !== -1) {
    count++;
  }
  return (count);
};

console.log(solution(input));

