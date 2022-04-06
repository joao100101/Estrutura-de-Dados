function merge(vetor) {
    if (vetor.length < 2) {
        return vetor
    }
    var meio = Math.floor(vetor.length / 2)

    var esquerda = vetor.slice(0, meio);
    var direita = vetor.slice(meio);

    esquerda = merge(esquerda)
    direita = merge(direita)

    let posEsq = 0;
    let posDir = 0;
    let vetRes = []

    while (posEsq < esquerda.length && posDir < direita.length) {
        if (esquerda[posEsq] < direita[posDir]) {
            vetRes.push(esquerda[posEsq])
            posEsq++
        } else {
            vetRes.push(direita[posDir])
            posDir++
        }
    }
    let sobra

    if (posEsq < posDir) {
        sobra = esquerda.slice(posEsq)
    } else {
        sobra = direita.slice(posDir)
    }
    return [...vetRes, ...sobra]
}


var vetor = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]
var numsOrd = merge(vetor)

console.log(numsOrd)