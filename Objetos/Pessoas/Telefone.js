// 01: Código do arquivo Telefone.js
// 02:
class Telefone {
  // 03:
  #ddd;
  #numero;
  #pessoas = [];
  // 04:
  setPessoa(pessoa) {
    if (pessoa) {
      this.#pessoas.push(pessoa);
      return true;
    } else {
      return false;
    }
  }
  // 05:
  getPessoas() {
    return this.#pessoas;
  }
  //============================================
  // 06:
  setDdd(ddd) {
    if (ddd) {
      this.#ddd = ddd;
      return true;
    } else {
      return false;
    }
  }
  // 07:
  getDdd() {
    return this.#ddd;
  }
  // 08:
  setNumero(numero) {
    if (numero) {
      this.#numero = numero;
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getNumero() {
    return this.#numero;
  }
}
// 10:
module.exports = Telefone;



/*const y = new Telefone();
var resposta = y.setDdd("");    //Se as "" estiverem vazias, o retorno vai ser falso e undefined.

if (resposta){
console.log(y.getDdd());
}
else {
  console.log("Ddd vazio ou incorreto!")
}

const z = new Telefone();
var resposta = z.setNumero("");    //Se as "" estiverem vazias, o retorno vai ser falso e undefined.

if (resposta){
console.log(z.getNumero());
}
else {
  console.log ("Número vazio ou incorreto!")
}*/