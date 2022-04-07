function merge(vetor, fnComp) {
  if (vetor.length < 2) {
    return vetor;
  }

  var meio = Math.floor(vetor.length / 2);

  var esquerda = vetor.slice(0, meio);
  var direita = vetor.slice(meio);

  esquerda = merge(esquerda, fnComp);
  direita = merge(direita, fnComp);

  let posEsq = 0;
  let posDir = 0;
  let vetRes = [];

  while (posEsq < esquerda.length && posDir < direita.length) {
    if (fnComp(esquerda[posEsq], direita[posDir])) {
      vetRes.push(esquerda[posEsq]);
      posEsq++;
    } else {
      vetRes.push(direita[posDir]);
      posDir++;
    }
  }
  let sobra;

  if (posEsq < posDir) {
    sobra = esquerda.slice(posEsq);
  } else {
    sobra = direita.slice(posDir);
  }
  return [...vetRes, ...sobra];
}

function comparar(esquerda, direita) {
  return esquerda.nome_motorista < direita.nome_motorista;
}

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

var motoristasOrd = merge(objMotoristas, comparar);

console.log(motoristasOrd);
