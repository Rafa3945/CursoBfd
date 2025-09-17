class Titulo{
  #numero
  #zona
  #sessao

  setNumero(numero){
    if(numero){
    this.#numero = numero;
    return true;
    }
    else{
      return false;
    }
  }
  
  getNumero(){
    return this.#numero;
  }

  setZona(zona){
    if(zona){
    this.#zona = zona;
    return true;
    }
    else{
      return false;
    }
  }
  
  getZona(){
    return this.#zona;
  }

  setSessao(sessao){
    if(sessao){
    this.#sessao = sessao;
    return true;
    }
    else{
      return false;
    }
  }
  
  getSessao(){
    return this.#sessao;
  }

  #pf
  setPF(pf){
    if(pf){
    this.#pf = pf;
    return true;
    }
    else{
      return false;
    }
  }
  
  getPF(){
    return this.#pf;
  }
}
module.exports = Titulo;