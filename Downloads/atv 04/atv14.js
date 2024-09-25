class Aluno {
    constructor(nome, matricula, curso) {
        this._nome = nome;
        this._matricula = matricula;
        this._curso = curso;
    }

    // Getters e Setters
    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get matricula() { return this._matricula; }
    set matricula(valor) { this._matricula = valor; }

    get curso() { return this._curso; }
    set curso(valor) { this._curso = valor; }
}

// Exemplo de uso
const aluno = new Aluno("Daniel", "2023001", "Direito");
console.log(aluno.nome);        
console.log(aluno.matricula);   
console.log(aluno.curso);       
