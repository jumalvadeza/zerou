class Cachorro {
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

    latir() {
        return "Au au!";
    }
}

const cachorro = new Cachorro('vital', 'pinscher', 5);

console.log(cachorro.nome); 
console.log(cachorro.raca); 
console.log(cachorro.idade); 
console.log(cachorro.latir());