
//input no javacript pouco utilizado por que varia de navegador e é pouco configurável =====> prompt

let pergunta = prompt("Qual o seu nome?");

console.log(pergunta)

let idade = prompt(`Qual a sua idade, ${pergunta}`)

console.log(`${idade} anos`)


//alert()

//Alerta ao usuário é invasivo, não é legal

alert('Cuidado!!!')

//Math.x()
//Biblioteca nativa de várias funções matemáticas ===> muito utilizadas


let maior = Math.max(5,6,4,3,12);
console.log(maior);

let menor = Math.min(5,6,4,3,12);
console.log(menor);

let decimal = Math.round(5.455623);
console.log(decimal);

let decimalACima = Math.ceil(5.455623);
console.log(decimalACima);