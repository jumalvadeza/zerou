class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    
    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getAltura() {
        return this.altura;
    }

    
    setNome(nome) {
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    setAltura(altura) {
        this.altura = altura;
    }


    toString() {
        return `Nome: ${this.nome}\nIdade: ${this.idade} anos\nAltura: ${this.altura} m`;
    }
}

const pessoa1 = new Pessoa("João", 25, 1.75);
console.log(pessoa1.toString());

