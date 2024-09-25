class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
        this._nome = nome;
        this._codigo = codigo;
        this._cargaHoraria = cargaHoraria;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get codigo() { return this._codigo; }
    set codigo(valor) { this._codigo = valor; }

    get cargaHoraria() { return this._cargaHoraria; }
    set cargaHoraria(valor) { this._cargaHoraria = valor; }
}


const disciplina = new Disciplina("Matemática", "MAT101", 60);
console.log(disciplina.nome);         
console.log(disciplina.codigo);        
console.log(disciplina.cargaHoraria);  

