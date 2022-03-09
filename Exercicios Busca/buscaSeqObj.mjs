import {objNomes} from "./data/vetor-obj-nomes.mjs";

function buscaSequencial(vetor, fnComp){
    for(let i in vetor){
        if(fnComp(vetor[i])){
            return i;
        }
    }
    return -1;
}

function comparaNomes(obj){
    return obj.first_name === "ALEXANDRE";
}



console.log(`Posicao do Alexandre = ${buscaSequencial(objNomes, comparaNomes)}`);