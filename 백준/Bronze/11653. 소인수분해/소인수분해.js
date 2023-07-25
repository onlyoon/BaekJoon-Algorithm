const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(num) {
  let primeNumber;
  while (num !== 1) {
    primeNumber = null;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0 && i !== 1) {
        primeNumber = i;
        break;
      }
    }
    num = num / primeNumber;
    console.log(primeNumber);
  }
}

solution(input);