class Animal {
    constructor(nome, tipo) {
        this._nome = nome;
        this._tipo = tipo;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get tipo() { return this._tipo; }
    set tipo(valor) { this._tipo = valor; }

    emitirSom() {
        throw new Error("Método emitirSom deve ser implementado");
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome, 'Cachorro');
    }

    emitirSom() {
        return 'Au Au';
    }
}

const cachorro = new Cachorro('vital');
console.log(`Nome: ${cachorro.nome}`); 
console.log(`Tipo: ${cachorro.tipo}`);
console.log(`Som: ${cachorro.emitirSom()}`); 
