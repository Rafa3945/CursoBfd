const Pessoa = require('./Pessoa.js');
const IE = require('./IE/IEclss');

class PJ extends Pessoa {
  #CNPJ;
  setCNPJ(CNPJ) {
    if (CNPJ) {
      if (CNPJ.length < 18) {
        return false;
      }
      this.#CNPJ = CNPJ;
      return true;
    } else {
      return false;
    }
  }

  getCNPJ() {
    return this.#CNPJ;
  }
  setEmail(email) {
    //Sobrescrita de métodos
    if (email !== '') {
      if (email.includes('@')) {
        super.setEmail(email); //O (super) é utilizado para indicar que estou usando o email da classe superior, ou seja, da superclasse.
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  #ie
  setIE(ie){
    if(ie instanceof IE){
      this.#ie = ie;
      ie.setPJ(this);
      return true
    }
    else{
      return false;
    }
  }
  getIE(){
    return this.#ie;
  }
}

module.exports = PJ;
/*const y = new PJ();
var resposta = y.setCNPJ("");    //Se as "" estiverem vazias, o retorno vai ser falso e undefined.

resposta = y.setEmail('');*/
