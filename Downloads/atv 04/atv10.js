class Gato {
    constructor(nome, raca, idade) {
        this._nome = nome;
        this._raca = raca;
        this._idade = idade;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get raca() { return this._raca; }
    set raca(valor) { this._raca = valor; }

    get idade() { return this._idade; }
    set idade(valor) { this._idade = valor; }

    miar() {
        return "Miau!";
    }
}

const gato = new Gato('lili', 'Siamês', 10);

console.log(gato.nome); 
console.log(gato.raca); 
console.log(gato.idade); 
console.log(gato.miar()); 
