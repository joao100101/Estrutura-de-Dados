var numeros = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]


function sort(vetor) {
    let tam = vetor.length - 1;
    let trocas = 0;

    let comparacoes = 0;
    do {
        for (let i = 0; i < tam; i++) {
            comparacoes++;
            if (vetor[i] > vetor[i + 1]) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                trocas++;
            }
        }
        tam--;
    } while (tam > 0);

    console.log("Comparacoes: " + comparacoes);
    console.log("Trocas: " + trocas);
    console.log(numeros);
}

sort(numeros);