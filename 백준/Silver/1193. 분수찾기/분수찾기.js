let input = require('fs')
  .readFileSync('/dev/stdin')
  .toString().trim();

n = 0;
let total = 0;
while (total < input) {
  total += n + 1;
  n++;
}

let denominator;
let numerator;

if (n%2 === 1) {
  denominator = total - input + 1;
  numerator = n - (total - input);
}
if (n%2 === 0) {
  denominator = n - (total - input);
  numerator = total - input + 1;
}

console.log(denominator + '/' + numerator);