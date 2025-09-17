class Aluno{
    #matricula;    //visibilidade privada
    setMatricula(matricula){
      this.#matricula = matricula;
    }
    getMatricula(){
      return this.#matricula;
    }
    #curso;    //visibilidade privada
    setMatricula(curso){
      this.#curso = curso;
    }
    getMatricula(){
      return this.#curso;
    }
    #escola;    //visibilidade privada
    setMatricula(escola){
      this.#escola = escola;
    }
    getMatricula(){
      return this.#escola;
    }
}



module.exports = Aluno;
