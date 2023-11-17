const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(v => +v);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.count = 0;
  }
}

class doubleLinkedList {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
    this.pointer = null;
    this.count = 1;
    this.result = [];
  }
  create(num) {
    for (let i = 1; i <= num; i++) {
      const newNode = new Node(i);
      if (this.front === null) {
        this.front = newNode;
        this.rear = newNode;
        this.size++;
      } else {
        newNode.prev = this.rear;
        newNode.next = this.front;
        this.rear.next = newNode;
        this.rear = newNode;
        this.front.prev = this.rear;
        this.size++;
      }
    }
  }
  deleteNum(num) {
    this.pointer = this.front;
    while (1) {
      if (this.count === num) {
        this.result.push(this.pointer.value);
        // 지우고 배열에 저장
        this.pointer.prev.next = this.pointer.next;
        this.pointer.next.prev = this.pointer.prev;
        this.pointer = this.pointer.next;
        this.count = 1;
        // count = 0
      } else {
        this.pointer = this.pointer.next;
        this.count += 1;
        // 다음으로 이동
        // count + 1
      }
      if (this.pointer.prev.value === this.pointer.value && this.pointer.value === this.pointer.next.value) {
        this.result.push(this.pointer.value);
        return this.result;
      }
    }

  }
}

const solution = (arr) => {
  if (arr.join(" ") === `1 1`) {
    return `<1>`;
  }
  const list = new doubleLinkedList();
  list.create(arr[0]);
  return `<${list.deleteNum(arr[1]).join(", ")}>`;
};

console.log(solution(input));