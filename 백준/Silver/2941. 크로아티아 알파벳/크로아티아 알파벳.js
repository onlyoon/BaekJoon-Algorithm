let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString().trim().toString();

function solution(string) {
  const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let i = 0;
  let unCount = 0;
  let count = 0;
  while (unCount !== 9) { // 모든 것을 카운트 해도 나오지 않을 경우 종료
    const regex = new RegExp(`${croatiaAlphabet[i]}`);
    if (regex.test(string)) { // string에 해당 문자열이 있다면
      string = string.replace(regex, '0');
      unCount = 0;
      count++;
      // console.log(`count: `, count);
      i = 0;
      continue;
    };
    i++; // 다음 문자열로
    if (i === 8) { // 만일 알맞는 문자열이 없을 경우
      i = 0;
    }
    // console.log(string);
    // console.log(`unCount: `, unCount);
    unCount++;
  }
  while (string.indexOf("0") !== -1) {
    string = string.replace('0', '');
  }
  // console.log(string);
  return console.log(string.length + count);
}

solution(input);
