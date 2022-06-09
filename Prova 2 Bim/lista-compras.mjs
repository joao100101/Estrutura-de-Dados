/*
    1. O Professor Alexandre saiu para fazer compras com uma lista em mãos.
    Abaixo segue a lista de compras:
    - Sabonete
    - Detergente   
    - Cebola
    - Leite
    - Sabão em pó
    - Arroz
    - Feijão
    - Macarrão
    - Creme dental

    2. Iremos organizar a lista de compras, onde os produtos alimentícios ficarão
    entre os primeiros itens, e os produtos de limpeza e higiene pessoal ficarão no
    final da lista.
    O primeiro passo é importar a classe apropriada e depois criar o nosso "objeto" lista.
*/


import Deque from './lib/Deque.mjs'


let lista = new Deque();

/*
    3. Faça com que a lista de compras do Professor Alexandre fique na seguinte sequência:
    
    // Produtos Alimentícios
    1º Arroz
    2º Feijão
    3º Macarrão
    4º Cebola
    5º Leite

    // Produtos de limpeza/higiene pessoal
    6º Sabonete
    7º Detergente   
    8º Sabão em pó
    9º Creme dental
*/

lista.insertBack("Arroz")
lista.insertBack("Feijão")
lista.insertBack("Macarrão")
lista.insertBack("Cebola")
lista.insertBack("Leite")

lista.insertBack("Sabonete")
lista.insertBack("Detergente")
lista.insertBack("Sabão em pó")
lista.insertBack("Creme dental")


/*
    4. Imprima a lista na ordem correta.
*/


console.log(lista.print())


/*
    5. A esposa do Professor Alexandre ligou pedindo que ele adicionasse mais 2 (dois)
    produtos alimentícios e 3 (três) produtos de limpeza e higiene pessoal na sua lista. São eles:

    // Produtos Alimentícios
    - Banana (ficará como o primeiro item da lista)
    - Maçã (ficará como o segundo item da lista)

    // Produtos de limpeza/higiene pessoal
    //(adicione os itens nesta sequência)
    - Água sanitária
    - Condicionador de cabelo
    - Álcool
*/

lista.insertFront("Maçã")
lista.insertFront("Banana")

lista.insertBack('Água sanitária')
lista.insertBack('Condicionador de cabelo')
lista.insertBack('Álcool')



/*
    6. Imprima a lista na ordem correta depois de adicionar os novos produtos.
*/

console.log(lista.print())



/*
    7. O Professor Alexandre observou que 2 (dois) produtos já tinham na sua casa e decidiu
    removê-los da sua lista. São eles:
    - Banana
    - Álcool
*/


let removido1 = lista.removeFront()
let removido2 = lista.removeBack()


/*
    8. Mostre apenas os itens removidos da lista.
*/


console.log(removido1)
console.log(removido2)


/*
    9. Consulte quem é o primeiro e o último item da lista atual.
*/


console.log(lista.peekFront())
console.log(lista.peekBack())


/*
    10. Imprima a lista correta depois de todas as alterações que foram feitas.
*/
console.log(lista.print())