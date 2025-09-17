import {localStorage} from './localStorage.mjs';
import PJ from '../PJ.js';

export default class PJDAO {
  #pj
  constructor(pj){
  if (pj instanceof PJ) {
  this.#pj = pj;
  }
}
toJSON(){
  let fones = [];
  for (let fone of this.#pj.getTelefones()){
    fones.push(
      {                                  // 13 // Adiciona ao array um objeto com DDD e número
        ddd: fone.getDdd(),
        numero: fone.getNumero(),
      });
    }

    return {                                        // 17 // Retorna objeto literal que representa todos os dados relevantes da PJ
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

   