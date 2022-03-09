//import {nomes} from './vetor-nomes.mjs'

function buscar(array, valor){
    valor = valor.toUpperCase().replace(" ", "")
    for(i in array){
        if(array[i] === valor){
            return i;
        }
    }
    return -1;
}

const lista = require('./data/vetor-nomes.mjs')
console.log(buscar(lista, "joao victor"))
