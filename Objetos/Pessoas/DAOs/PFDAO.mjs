import {localStorage} from './localStorage.mjs';
import PF from '../PF.js';

export default class PFDAO {
  #pf
  constructor(pf){
  if (pf instanceof PF) {
  this.#pf = pf;
  }
}
toJSON(){
  let cpf = [];
  for (let cpf of this.#pf.getCPF()){
    cpf.push(
      {                                  // 13 // Adiciona ao array um objeto com DDD e número
        CPF: cpf.getCpf(),
      });
    }

    return {                                        // 17 // Retorna objeto literal que representa todos os dados relevantes da PF
      nome: this.#pj.getNome(),
      email: this.#pj.getEmail(),
      cnpj: this.#pj.getCNPJ(),
      endereco: {
        logradouro: this.#pj.getEndereco().getLogradouro(),
        cep: this.#pj.getEndereco().getCep(),
      },
      telefone: fones,
      ie: {
        numero: this.#pj.getIE().getNumero(),
        estado: this.#pj.getIE().getEstado(),
        dataRegsitro: this.#pj.getIE().getDataRegistro(),
      }
    };
  }

  saveJSON() {                                      // 30 // Método para salvar o objeto PJ em formato JSON no localStorage
    // transforma em string JSON usando stringify() e armazena
    localStorage.setItem("pj", JSON.stringify(this.toJSON())); // 32
  }

  recoveryJSON() {                                  // 34 // Método para recuperar os dados de PJ armazenados
 // recupera a string armazenada e transforma em JSON usando parse()
 return JSON.parse(localStorage.getItem("pj"));  // 36
}

}                                                   // 38 // Fim da classe