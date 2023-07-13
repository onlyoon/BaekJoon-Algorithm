input = require('fs').readFileSync('/dev/stdin').toString();

let count = 0;
for (let i = 0; i < +input; i++) {
  for (let j = count; j < +input; j++) {
    process.stdout.write('*');
  }
  count++;
  console.log();
}
