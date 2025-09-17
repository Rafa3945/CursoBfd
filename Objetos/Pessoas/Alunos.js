const PF = require('./PF.js');

class Alunos extends PF {
  #matricula;
  #curso;
  //Condições para a matrícula: começa com '20' e AND(E) ter 8 caracteres
  setMatricula(matricula){
    //Estrutura: if (() && ()){}
    if((matricula.startsWith('20')) && (matricula.length === 8)){                 
    this.#matricula = matricula;
    return true;
    }
    else{
      return false;
    }
  }
  
  getMatricula(){
    return this.#matricula;
  }

  setCurso(curso){
    //Estrutura: if (() || ()) {...}
  if((curso === 'ADS') || (curso === 'SI')){                      
  this.#curso = curso;
  return true;
  }
  else{
    return false;
  }
}

getCurso(){
  return this.#curso;
}
}
module.exports = Alunos;

const y = new Alunos();
var resposta = y.setMatricula("20456386");  
  
if (resposta){
console.log(y.getMatricula());
}
else {
  console.log ("Matrícula errada!");
}
const z = new Alunos();
var resposta = z.setCurso("ADS");    

if (resposta){
console.log(z.getCurso());
}
else {
  console.log ("Opção de curso não é correta!");
}