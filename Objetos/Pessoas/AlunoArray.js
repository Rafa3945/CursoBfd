const Alunos = require('./Alunos.js');

const obj1 = new Alunos();
obj1.setNome('Pedro')
obj1.setMatricula('20459613');
console.log(obj1.getNome());

var objetos = [];
objetos.push(obj1);
console.log(objetos);
console.log(objetos[0].getNome());


