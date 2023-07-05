let filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();

let num = 0;
let num2 = input - 1;
for (let i = 0; i < input * 2 - 1; i++) {
  for (let j = 0; j < Math.abs(input - num - 1); j++) {
    process.stdout.write(' ');
  }
  process.stdout.write('*');
  num++;
  for (let k = 0; k < input - Math.abs(num2) - 1; k++) {
    process.stdout.write('*');
  }
  for (let k = 0; k < input - Math.abs(num2) - 1; k++) {
    process.stdout.write('*');
  }
  num2--;

  console.log();
}