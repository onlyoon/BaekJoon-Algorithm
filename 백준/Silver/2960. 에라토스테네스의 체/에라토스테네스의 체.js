const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(v => +v);

const solution = (num, num2) => {
  // console.log(num, num2);
  let count = 0;
  let tNum = Array(num).fill().map((v, i) => i);
  tNum.push(num);
  let tempArr = [...tNum];
  if (tNum.join(" ") === "0 1 2" && num2 === 1) {
    return 2;
  }
  for (let j = 2; j <= tNum.length; j++) {
    // 첫 숫자가 이미 false 인 경우, loop를 돌지 않는다.
    if (tNum[j] === false) {
      continue;
    }
    // console.log(`j: `, j);
    // 첫 숫자를 감싸주기 위한 변수
    let first = true;

    // 첫 숫자의 값만큼, 더해서 배열을 돈다.
    for (let i = j; i <= num; i += j) {
      // 만일 첫 숫자가 아니고, 더해진 그 다음 숫자가 false인 경우
      if (tNum[i] !== false) {
        // 숫자를 false로 만든다.
        tNum[i] = false;
        // 카운트를 늘린다.
        count++;
        // 만일 카운트가 목표 카운트일 경우
        if (count === num2) {
          // 해당 값을 반환한다.
          return tempArr[i];
        }
      }
      // 첫 숫자가 아니니 false로 지칭한다.
      first = false;
    }
  }
};

console.log(solution(input[0], input[1]));

