function buscar(array, valor){
    for(i in array){
        if(array[i] === valor){
            return i;
        }
    }
    return -1;
}

let vetor = [10,45,33,100,21,12,0,44]
let frutas = ["uva", "maracuja", "pessego", "mamao"]

console.log(`Localizacao do num: ${buscar(vetor, 21)}`)

console.log("")
console.log(`Localizacao da fruta: ${buscar(frutas, "pessego")}`)
