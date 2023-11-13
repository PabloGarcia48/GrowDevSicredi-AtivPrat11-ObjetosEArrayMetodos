/*
1. Considere o seguinte array:<br>
const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00]<br>
a. Imprima no console o índice do primeiro salário maior que 7.500 utilizando o <strong>findIndex</strong><br>
b. Crie uma nova lista filtrada com os salários que são maior que 8.000 utilizando o <strong>filter</strong>
*/

const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00]
const maioresSalarios = salarios.filter(filterSalarios)
const indiceSalario = salarios.findIndex(findIndexSalario)

function findIndexSalario(salario) {
    return salario > 7500
}

function filterSalarios(salario) {
    return salario > 8000
}

console.log(indiceSalario);
console.log(maioresSalarios);

document.write(`a. O índice do primeiro salário maior que 7.500 é: ${indiceSalario}<br>`)
document.write(`b. Salários maiores do que 8.000 são: [${maioresSalarios}]`)
