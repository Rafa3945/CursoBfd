// 01: Código do arquivo Endereco.js
// 02:
class Endereco {
  // 03:
  #logradouro;
  #cep;
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
  //=====================================
  // 06:
  setLogradouro(logradouro) {
    if (logradouro) {
      this.#logradouro = logradouro;
      return true;
    } else {
      return false;
    }
  }
  // 07:
  getLogradouro() {
    return this.#logradouro;
  }
  // 08:
  setCep(cep) {
    if (cep) {
      this.#cep = cep;
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getCep() {
    return this.#cep;
  }
}
// 10:
module.exports = Endereco;
