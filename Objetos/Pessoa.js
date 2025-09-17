//Classe: Estrutura que eu quero representar
      // *Atributos (Cracterísticas,propriedades)
      //*Métodos (Ações, funcionalidade)
//Objeto: Instância da classe


class Pessoa {
  constructor(peso,altura)
  {
      this.peso = peso;
      this.altura = altura;
  }

imc() 
{
let imc = this.peso / (this.altura * this.altura);
return imc;
}
}
module.exports = Pessoa;

