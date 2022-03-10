import { objNomes } from "./data/vetor-obj-nomes.mjs";
import * as readline from 'node:readline';

var resposta = "";
function buscaBinaria(vetor, fnComp) {
    let ini = 0;
    let fim = vetor.length - 1;

    while (fim >= ini) {
        let meio = Math.floor((ini + fim) / 2);

        switch (fnComp(vetor[meio])) {
            case 0:
                return meio;
            case 1:
                ini = meio + 1;
                break;
            default:
                fim = meio - 1;
        }
    }
    return -1;
}



function comparar(valorMeio, valorBusca = resposta) {
    valorBusca = valorBusca.replace(" ", "").toUpperCase();
    if (valorBusca === valorMeio.first_name) {
        return 0;
    } else if (valorBusca > valorMeio.first_name) {
        return 1;
    } else {
        return -1;
    }
}

//console.log(buscaBinaria(objNomes, comparar()));

var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite um nome para comparar: ", function(answer){
    resposta = answer;
    console.log(`Posicao de ${answer} na lista: ${buscaBinaria(objNomes, comparar)}`)
    leitor.close();
});