import {nomes} from './data/vetor-nomes.mjs';

let num = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];

function buscaBinaria(vetor, valorBusca){
    let ini = 0;
    let fim = vetor.length - 1;

    while(fim >= ini){
        let meio = Math.floor((ini+fim)/2);

        if(valorBusca === vetor[meio]){
            return meio;
        }else if(valorBusca > vetor[meio]){
            ini = meio + 1;
        }else{
            fim = meio - 1;
        }
    }
    return -1;
}

console.log("Posicao do 0: " + buscaBinaria(num, 0));

console.log("Posicao do Alexandre: " + buscaBinaria(nomes, "ALEXANDRE"))