const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const firstLine = +input.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
    this.result = [];
  }
  frontPush(num) {
    const newNode = new Node(num);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
      this.front.next = this.rear;
      this.rear.prev = this.front;
      this.size++;
    } else {
      this.front.prev = newNode;
      newNode.next = this.front;
      this.front = newNode;
      this.rear.next = null;
      this.size++;
    }
  }
  rearPush(num) {
    const newNode = new Node(num);
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
      this.front.next = this.rear;
      this.rear.prev = this.front;
      this.size++;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
      this.size++;
    }
  }
  frontPop() {
    if (this.front !== null) {
      this.result.push(this.front.value);
      if (this.front === this.rear) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
      }
      this.size--;
    } else {
      this.result.push(-1);
    }
  }
  rearPop() {
    if (this.rear !== null) {
      this.result.push(this.rear.value);
      if (this.rear === this.front) {
        this.front = null;
        this.rear = null;
      } else {
        this.rear = this.rear.prev;
      }
      this.size--;
    } else {
      this.result.push(-1);
    }
  }
  isSize() {
    this.result.push(this.size);
  }
  isEmpty() {
    if (this.size > 0) {
      this.result.push(0);
    } else {
      this.result.push(1);
    }
  }
  frontPrint() {
    if (this.front !== null) {
      this.result.push(this.front.value);
    } else {
      this.result.push(-1);
    }
  }
  backPrint() {
    if (this.rear !== null) {
      this.result.push(this.rear.value);
    } else {
      this.result.push(-1);
    }
  }
}

const solution = (arr, num) => {
  const dequeue = new Dequeue();
  for (let i = 0; i < num; i++) {
    let line;
    if (arr[i].indexOf(' ') !== -1) {
      line = arr[i].split(" ").map(v => +v);
    } else {
      line = [+arr[i]];
    }
    switch (line[0]) {
      case 1:
        dequeue.frontPush(line[1]);
        break;
      case 2:
        dequeue.rearPush(line[1]);
        break;
      case 3:
        dequeue.frontPop();
        break;
      case 4:
        dequeue.rearPop();
        break;
      case 5:
        dequeue.isSize();
        break;
      case 6:
        dequeue.isEmpty();
        break;
      case 7:
        dequeue.frontPrint();
        break;
      case 8:
        dequeue.backPrint();
        break;
      default:
        break;
    }
  }
  // console.log(dequeue);
  return dequeue.result.join("\n");
};

console.log(solution(input, firstLine));