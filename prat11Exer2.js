/*
2. James estava criando uma array com as cores do arco-íris, e ele esqueceu algumas cores. As cores padrão de um arco-íris são normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul", "Roxo"];
mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
Usando somente o método splice insira as cores que faltam no array e remova a cor "Preto", seguindo estes passos:
a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"
*/

const jamesRainbow = ["Vermelho", "Laranja", "Preto", "Azul"]
jamesRainbow.splice(2, 1)

// Resposta a.
console.log(jamesRainbow);
document.write(`a. [${jamesRainbow}]<br>`)

// Resposta b.
jamesRainbow.splice(2, 0, "Amarelo", "Verde")
console.log(jamesRainbow);
document.write(`b. [${jamesRainbow}]<br>`)

// Resposta c.
jamesRainbow.splice(5, 0, "Roxo")
console.log(jamesRainbow);
document.write(`c. [${jamesRainbow}]<br>`)