const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const solution = (num) => {
  const numArr = num.split("");
  const result = [];
  let binary;
  if (numArr[0] === "0") {
    return 0;
  }
  for (let i = 0; i < numArr.length; i++) {
    switch (numArr[i]) {
      case '0':
        binary = "000";
        break;
      case '1':
        binary = '001';
        break;
      case '2':
        binary = '010';
        break;
      case '3':
        binary = '011';
        break;
      case '4':
        binary = '100';
        break;
      case '5':
        binary = '101';
        break;
      case '6':
        binary = '110';
        break;
      case '7':
        binary = '111';
        break;
      default:
        break;
    }
    if (i === 0) {
      if (+numArr[i] < 2) {
        binary = binary.replace(/0+/g, "");
      } else {
        binary = binary.replace("011", "11");
        binary = binary.replace("010", "10");
        // console.log(binary);
      }
    }
    result.push(binary);
  }
  return result.join("");;
};

console.log(solution(input[0]));

