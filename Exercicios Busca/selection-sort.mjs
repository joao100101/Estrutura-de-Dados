function selectionSort(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        let i_menor = i;
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < vetor[i_menor]) {
                i_menor = j;
            }
        }
        [vetor[i], vetor[i_menor]] = [vetor[i_menor], vetor[i]];
    }

    return vetor;
}


let vetor = [10, 70, 12, 0, 1, 32];

console.log(selectionSort(vetor))