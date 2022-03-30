
menu();
function menu() {
    var op = 0;


    op = Number(prompt("Digite uma das opcoes a seguir:\n 1- Cadastrar\n 2- Relatorio"))
    switch (op) {
        case 1:
            let aluno = cadastrar();
            inserir(aluno)
            break;
    }
}

function getAlunos() {
    var alunos = []
    if (localStorage.getItem('alunos') != null) {
        alunos = localStorage.getItem('alunos');
    }
    return alunos;
}
function inserir(aluno) {
    var alunos = getAlunos();
    alunos.push(aluno);
    localStorage.setItem('alunos', alunos);
}
function cadastrar() {
    let nome;
    let ra;
    let idade;
    let sexo;
    let resultado;

    nome = prompt('Digite o nome do aluno')
    ra = parseInt(prompt('Digite o ra do aluno'))
    idade = parseInt(prompt('Digite a idade do aluno'))
    sexo = prompt('Digite o sexo do aluno [M/F]')
    resultado = prompt('Digite o resultado final [Aprovado/Reprovado]')

    var aluno = {
        NOME: nome,
        RA: ra,
        IDADE: idade.toFixed(0),
        SEXO: sexo,
        RESULTADO: resultado
    }
    if (alunosIsValid(aluno)) {
        return aluno;
    } else {
        alert('Erro no cadastro, tente novamente.')
        menu()
        return;
    }

}
function alunosIsValid(aluno) {
    let erro = "Null"
    if (aluno.NOME == null || aluno.NOME == "" || aluno.NOME == " ") {
        erro = "Nome invalido"
        console.log(erro)
        return false;
    } else if (isNaN(aluno.RA) || aluno.RA == null || aluno.RA == "" || aluno.RA == " ") {
        erro = "RA Invalido"
        console.log(erro)
        return false;
    } else if (isNaN(aluno.IDADE) || aluno.IDADE == null || aluno.IDADE == "" || aluno.IDADE == " ") {
        erro = "Idade invalida"
        console.log(erro)
        return false;
    } else if (aluno.SEXO == null || aluno.SEXO != 'M' || aluno.SEXO != 'F' || aluno.SEXO == "" || aluno.SEXO == " ") {
        if (aluno.SEXO == 'M' || aluno.SEXO == 'F') {
            return true;
        }
        erro = "SEXO Invalido"
        console.log(aluno.SEXO)
        console.log(erro)
        return false;
    } else if (aluno.RESULTADO == null || aluno.RESULTADO == "" || aluno.RESULTADO == " " || aluno.RESULTADO != "Aprovado" || aluno.RESULTADO != "Reprovado") {
        erro = "Resultado invalido."
        console.log(erro)
        return false;
    }
    return true;
}