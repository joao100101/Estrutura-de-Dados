export default class Deque {
  #data;

  constructor() {
    this.#data = [];
  }

  insertFront(valor) {
    this.#data.unshift(valor);
  }
  insertBack(valor) {
    this.#data.push(valor);
  }

  removeFront(valor) {
    this.#data.shift(valor);
  }

  removeBack(valor) {
    this.#data.pop(valor);
  }

  peekFront() {
    return this.#data[0];
  }
  peekBack() {
    return this.#data[this.#data.length - 1];
  }

  get isEmpty() {
    return this.#data.length == 0;
  }

  print() {
    let out = "[ ";
    for (let i in this.#data) {
      if (out != "[ ") {
        out += ", ";
      }
      out += `(${Number(i)+1}): ${this.#data[i]}`;
    }
    console.log(out + " ]");
  }
}
