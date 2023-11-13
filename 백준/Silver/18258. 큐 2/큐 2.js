const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const firstLine = input.shift();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }
  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }
  dequeue() {
    if (!this.head) {
      return -1;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
  front() {
    if (!this.head) {
      return -1;
    } else {
      return this.head.data;
    }
  }
  back() {
    if (!this.head) {
      return -1;
    } else {
      return this.rear.data;
    }
  }
  empty() {
    if (!this.head) {
      return 1;
    } else {
      return 0;
    }
  }
  size() {
    return this.length;
  }
}

const solution = (arr, num) => {
  const queue = new Queue();
  const result = [];
  for (let i = 0; i < num; i++) {
    const line = arr[i].split(' ');
    switch (line[0]) {
      case 'push':
        // console.log(line[1]);
        queue.enqueue(+line[1]);
        break;
      case 'pop':
        result.push(queue.dequeue());
        break;
      case 'size':
        result.push(queue.size());
        break;
      case 'empty':
        result.push(queue.empty());
        break;
      case 'front':
        result.push(queue.front());
        break;
      case 'back':
        result.push(queue.back());
        break;
      default:
        break;
    }
    // console.log(`queue: `, queue);
  }
  return result.join('\n');
};

console.log(solution(input, firstLine));
// solution(input);
