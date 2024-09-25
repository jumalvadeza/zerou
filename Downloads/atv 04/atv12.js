class Livro {
    constructor(titulo, autor, editora, anoPublicacao) {
        this._titulo = titulo;
        this._autor = autor;
        this._editora = editora;
        this._anoPublicacao = anoPublicacao;
    }

    get titulo() { return this._titulo; }
    set titulo(valor) { this._titulo = valor; }

    get autor() { return this._autor; }
    set autor(valor) { this._autor = valor; }

    get editora() { return this._editora; }
    set editora(valor) { this._editora = valor; }

    get anoPublicacao() { return this._anoPublicacao; }
    set anoPublicacao(valor) { this._anoPublicacao = valor; }
}

const livro = new Livro("Dom Casmurro", "Machado de Assis", "Editora XYZ", 1899);

console.log(livro.titulo);
console.log(livro.autor); 
console.log(livro.editora); 
console.log(livro.anoPublicacao); 

livro.titulo = "Memórias Póstumas de Brás Cubas";
console.log(livro.titulo); 
