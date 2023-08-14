const input = +require("fs").readFileSync("/dev/stdin").toString().trim();

let num = 0;
let count = 0;
while (count !== input) {
  if (num.toString().indexOf("666") !== -1) {
    num++;
    count++;
  }
  else num++;
}

console.log(num - 1);