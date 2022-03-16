var numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
var letras = ["c", "b", "z", "a", "j" , "o", "k"]
import {objMotoristas} from "./data/motoristas-obj-desord.mjs";


function sort(vetor, fnComp) {
    let tam = vetor.length - 1;
    let trocas = 0;

    let comparacoes = 0;
    do {
        for (let i = 0; i < tam; i++) {
            comparacoes++;
            if (fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                trocas++;
            }
        }
        tam--;
    } while (tam > 0);

    console.log("Comparacoes: " + comparacoes);
    console.log("Trocas: " + trocas);
    console.log(vetor[0]);
    console.log(vetor[1]);
    console.log(vetor[2]);
}

function crescente(valor1, valor2){
    return valor1.nome_motorista > valor2.nome_motorista;
}

function decrescente(valor1, valor2){
    return valor1.nome_motorista < valor2.nome_motorista;
}

//sort(numeros);
sort(objMotoristas, crescente);
