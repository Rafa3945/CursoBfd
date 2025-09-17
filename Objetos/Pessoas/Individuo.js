//Código do prof para endereço e telefone.
//set é usado para 1 atributo, já o add é usado para mais de 1.
//Objetivo do exemplo é demonstrar conceitos de encapsulamento adicionados de condicionais.

const Telefone = require ('./Telefone.js')

class Individuo {
#nome;
#email;  

//relacionamento N-1 Endereco

#endereco;
setEndereco(endereco){
  if(endereco instanceof endereco){
    this.endereco = endereco;
    endereco.addPessoa(this);   //Referência cruzada
    return true;
  }
  else {
    return false;
  }
}
getEndreco(){
  return this.#endereco;
}

//Relacionamento de N-N com telefone.
#telefones = [];
addTelefone(telefone){
  if(telefone instanceof telefone){
    this.#telefones.push(telefone);
    telefone.addPessoa(this);  //Referência cruzada
    return true;
  }
  else{
    return false;
  }
}
getTelefones(){
  return this.#telefones;
}

//================================================

setNome(nome){
  if(nome){
    this.#nome = nome;
    return true;
  }
  else{
    return false
  }
}
getNome(){
  return this.#nome;
}
setEmail(email){
  if(email){
    this.#email = email;
    return true;
  }
  else{
    return false;
  }
}
getEmail(){
  return this.#email;
}
}

module.exports = Individuo;

const end = new Endereco();
end.setLogradouro('');
const obj = new Pessoa();
obj.setNome('');
obj.setEndereco(end);

console.log(obj.getNome());
console.log(obj.getEndereco().getLogradouro());

const fone1 = new Telefone();
const fone2 = new Telefone();

fone1.setNumero('');
fone2.setNumero('');
obj.addTelefone(fone1);
obj.addTelefone(fone2);

console.log(obj.getTelefones());
console.log(end.getPessoas());
console.log(fone1.getPessoas());