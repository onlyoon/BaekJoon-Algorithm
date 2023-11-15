const fs = require('fs');
const input = +fs.readFileSync('/dev/stdin').toString().trim();

class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class Queue {
  constructor(value) {
    this.front = null;
    this.rear = null;
    this.size = 0;
    this.temp = 0;

    for (let i = value; i >= 1; i--) {
      let newNode = new Node(i);
      if (this.front === null) {
        this.front = newNode;
        this.rear = newNode;
        this.size++;
      } else {
        this.front.prev = newNode; // 1번
        newNode.next = this.front; // 2번
        newNode.prev = this.rear; // 3번
        this.rear.next = newNode; // 4번
        this.rear = newNode;
        this.size++;
      }
    }
  }
  cutEnd() {
    this.temp = this.rear.value;
    this.rear = this.rear.prev;
    this.front.prev = this.rear;
    this.rear.next = this.front;
    this.size--;
    return this.front.value;
  }
  rePush() {
    this.front = this.rear;
    this.rear = this.rear.prev;
  }
}

const solution = (num) => {
  const queue = new Queue(num);
  while (queue.size > 1) {
    queue.cutEnd();
    queue.rePush();
  }
  return queue.front.value;
};

console.log(solution(input));
