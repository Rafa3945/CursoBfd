const Pessoa = require('./Pessoa.js'); //Importei a classe
//Dados do João

const joao = new Pessoa(75, 1.64);
console.log(joao.imc());
console.log(joao.peso);
console.log(joao.altura);

//Dados da Maria
const maria = new Pessoa(65, 1.58);
console.log(maria.imc());
console.log(maria.peso);
console.log(maria.altura);

