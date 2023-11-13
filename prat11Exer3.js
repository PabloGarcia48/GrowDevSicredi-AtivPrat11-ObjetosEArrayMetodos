/*
Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.
Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28
Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400
Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

const pessoas = []
let continuar = true

while (continuar === true) {
    let pessoa = {}
pessoa.nome = prompt("Nome do funcionário");
pessoa.idade = prompt("Idade do funcionário");
pessoa.trabalhando = prompt("Está trabalhando? (s/n)");
if (pessoa.trabalhando === "s") {
    pessoa.salario = prompt("Qual o seu salário: ")
}
pessoas.push(pessoa)
continuar = confirm("Deseja Continuar cadastrando?")
}

document.write("Pessoas Desempregadas<br>")
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].trabalhando != "s") {
        document.write(`Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}<br>`)
    };
}

document.write("<br>Pessoas trabalhando ganhando até R$2.500,00<br>")
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].trabalhando === "s" && pessoas[i].salario <= 2500) {
        document.write(`Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}, Salário: ${pessoas[i].salario}<br>`)
    };
}

document.write("<br>Pessoas trabalhando ganhando acima de R$2.500,00<br>")
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].trabalhando === "s" && pessoas[i].salario > 2500) {
        document.write(`Nome: ${pessoas[i].nome}, Idade: ${pessoas[i].idade}, Salário: ${pessoas[i].salario}<br>`)
    };
}


