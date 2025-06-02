console.log("Hello World!");
let nome = 'Kauan';
let idade = 15;
let possuiCNH = t = false;
let jogaFreefire = false;
let altura = 1.68;
let indefinido = undefined;
let none = null

console.log(nome, idade, possuiCNH);

nome = 'Kauan Luidy';
console.log(nome);

const PI = 3.14;
console.log(PI);

let a = 10
let b = 20
let soma = a + b
let subtracao = a - b
let multiplicacao = a * b
let divisao = a / b
let potencia = a ** b
let resto = a % b
console.log(soma, subtracao, multiplicacao, divisao, potencia, resto);

let concatenar = "Ola " + nome + " seja...!"
console.log(concatenar);
let ideal = `Ola ${nome}, seja...crase`
console.log(ideal);
console.log(nome.length);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.toLocaleLowerCase());
console.log(nome.includes(' Senac'));
// console.log(nome.includes("Juliano"))
console.log(nome.includes('Kauan'));
// localizar o indice
console.log(nome.indexOf('M')); //Primeiro
console.log(nome.lastindexOf('a')); //Ultimo
//substituir
console.log(nome.replace('Kauan', 'Keras'));
//estrair parte do texto
console.log(nome.slice(3, 7));
//Remover espaços varios do inicio e fim
console.log("Agua de beber ".trim());
//operadores logicos

//tipo de variavel
console.log(typeof nome);
console.log(typeof altura);
//igual
console.log(2 == '2');
//igual e do mesmo tipo
console.log(2 === '2');
//maior
console.log(2 > '2');
//maior ou igual
console.log(4 >= 3);
//menor
console.log(5.9 < 6);
//menor ou igual
console.log(6 <= 6);
//diferente
console.log(6 != 6);
console.log(6 !== 6);
//Funções
function statusNota(nota) {
    // controle de fluxo
    let msg = 'Não informado';
    if(nota >= 6) {
        msg = 'Aprovado';
    }
    else if(nota >= 5) {
        msg = 'Recuperação';
    }
    else if(nota < 5) {
        msg = 'Reprovado';
    }
    return msg;
}
let situação = statusNota(5.6);
console.log(situação);

let nota = 5.6;
let presença = 90
if(nota >= 6 & presença >= 75) {
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}
 let finaldocurso = true
 let liberouMaisCedo = false

    if(finaldocurso | liberouMaisCedo) {
        console.log('Hora de ir embora');
    }
    else {
        console.log('Continua o baile');
    } 

    let teste = (>= 6 && presença >= 75) & (finaldocurso | liberouMaisCedo) 
    console.log(frutas)
    //0 = false e 1= True
    //coleção de dados
    let frutas = ['maçã', 'banana', 'laranja', 'uva'];
    console.log(frutas);
    //Chamar pelo indice 0,1,2....
    console.log(frutas[1]);
    //Adicionar nova fruta
    frutas.push('Abacate');
    console.log(frutas);
    // Remover o ultimo
    frutas.pop();
    //remover o primeiro
    frutas.shift();
    //colocar no inicio da fila
    frutas.unshift('Pera');
    console.log(frutas);
    // iteração
    //para:percorre uma lista conhecida
    for(let f of frutas){
        console.log(f)
    }
    for(f in frutas){
        console.log(f)
    }
    //enquanto nao tiver fim
    let contador = 0;
    while(contador <=10) {
console.log(contador, regressiva);
       //incrementar
       contador++
       //decrementar
       regressiva--; 
    }