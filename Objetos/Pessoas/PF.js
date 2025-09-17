// 01: Arquivo criado em projeto no www.stackblitz.com denominado PF.js (Pessoa Física)
// 02: Arquivo criado dentro de uma pasta /objetos/pessoas na raiz do projeto
// 03: Objetivo do exemplo: demonstrar conceitos de Herança, encapsulamentos e relacionamentos 1 - 1 com a classe Titulo
// 04:
const Pessoa = require('./Pessoa');
// 05:
const Titulo = require('./Titulo');
// 06:
class PF extends Pessoa {
  // 07:
  #cpf;
  // 08:
  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    } else {
      return false;
    }
  }
  // 09:
  getCPF() {
    return this.#cpf;
  }
  // 10: Relacionamento 1 - 1 com a classe Titulo
  #titulo;

  // 11:
  setTitulo(titulo) {
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;
      titulo.setPF(this); // referência cruzada
      return true;
    } else {
      return false;
    }
  }
  // 12:
  getTitulo() {
    return this.#titulo;
  }
}
// 13:
module.exports = PF;
