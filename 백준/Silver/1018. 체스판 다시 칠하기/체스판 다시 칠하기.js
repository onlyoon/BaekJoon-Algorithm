let input = require("fs")
  .readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(arr) {
  const firstLine = arr.shift().split(" ").map(v => +v);
  // console.log(firstLine);
  if (firstLine[0] < 8 || firstLine[1] < 8) {
    return;
  }
  let x = 0;
  let y = 0;
  let result = 2500;
  while (1) {
    let compareBoard = [];
    for (let i = x; i < x + 8; i++) {
      let arrString = "";
      for (let j = y; j < y + 8; j++) {
        // process.stdout.write(arr[i][j]);
        arrString += arr[i][j];
      }
      // console.log(`arrString: `, arrString);
      compareBoard.push(arrString);
      // console.log();
    }
    // console.log(`compareBoard: `, compareBoard);
    result = check(compareBoard, result);
    x++;
    if (firstLine[0] === x + 7) {
      x = 0;
      y += 1;
    }
    if (firstLine[1] === y + 7) {
      break;
    }
  }

  return console.log(result);
}

function check(arr, answer) { // 검증을 해야하는 단계
  let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
  let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (arr[i][j] !== white[i][j])
        checkWhite++;
      if (arr[i][j] !== black[i][j])
        checkBlack++;
    }
  }
  // console.log(`checkWhite: `, checkWhite);
  // console.log(`checkBlack: `, checkBlack);
  // console.log(`answer: `, answer)
  if (checkWhite < answer || checkBlack < answer) {
    if (checkWhite < checkBlack) {
      answer = checkWhite;
      return answer;
    } else {
      answer = checkBlack;
      return answer;
    }
  } else {
    return answer;
  }
}


solution(input);