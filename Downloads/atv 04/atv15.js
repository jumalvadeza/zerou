class Professor {
    constructor(nome, departamento, titulacao) {
        this._nome = nome;
        this._departamento = departamento;
        this._titulacao = titulacao;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get departamento() { return this._departamento; }
    set departamento(valor) { this._departamento = valor; }

    get titulacao() { return this._titulacao; }
    set titulacao(valor) { this._titulacao = valor; }
}

const professor = new Professor("D.Carlos Silva", "Matemática", "Doutor");
console.log(professor.nome);        
console.log(professor.departamento);
console.log(professor.titulacao);    

  
