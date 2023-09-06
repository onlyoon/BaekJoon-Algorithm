const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim().split("\n");

function push(queue, num, result) {
  queue.push(num);
  return [queue, result];
}

function pop(queue, result) {
  if (queue[0] === undefined) {
    result.push(-1);
    return [queue, result];
  } else {
    result.push(+queue.splice(0, 1));
    return [queue, result];
  }
}

function size(queue, result) {
  result.push(queue.length);
  return [queue, result];
}

function empty(queue, result) {
  if (queue[0] === undefined) {
    result.push(1);
    return [queue, result];
  } else {
    result.push(0);
    return [queue, result];
  }

}

function front(queue, result) {
  if (queue[0] === undefined) {
    result.push(-1);
    return [queue, result];
  } else {
    result.push(+queue[0]);
    return [queue, result];
  }
}

function back(queue, result) {
  if (queue[0] === undefined) {
    result.push(-1);
    return [queue, result];
  } else {
    result.push(+queue[queue.length - 1]);
    return [queue, result];
  }
}


function solution(arr) {
  const firstLine = +arr[0];
  const queue = [];
  const result = [];
  for (let i = 1; i < firstLine + 1; i++) {
    const line = arr[i].split(" ");
    switch (line[0]) {
      case 'push':
        push(queue, line[1]);
        break;
      case 'pop':
        pop(queue, result);
        break;
      case 'size':
        size(queue, result);
        break;
      case 'empty':
        empty(queue, result);
        break;
      case 'front':
        front(queue, result);
        break;
      case 'back':
        back(queue, result);
        break;
    }
  }
  return result.join("\n");
};

console.log(solution(input));

