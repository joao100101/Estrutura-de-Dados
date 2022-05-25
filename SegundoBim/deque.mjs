import Deque from "./Lib/Deque.mjs";

let lista = new Deque();

console.log(lista.isEmpty)
lista.insertFront('Abacate')
lista.insertFront('Pão')
lista.insertBack('Sabão em Pó')
lista.insertFront('Bolacha')
lista.insertBack('Detergente')
lista.insertBack('Agua Sanitária')
console.log(lista.isEmpty)
console.log(lista.peekFront())
console.log(lista.peekBack())
lista.print()