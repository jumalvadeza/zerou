
class Personagem {
    constructor(nome, pontosDeVida, forca) {
        this._nome = nome;
        this._pontosDeVida = pontosDeVida;
        this._forca = forca;
        this._nivel = 1;
        this._experiencia = 0;
    }


    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get pontosDeVida() { return this._pontosDeVida; }
    set pontosDeVida(valor) { this._pontosDeVida = valor; }

    get forca() { return this._forca; }
    set forca(valor) { this._forca = valor; }

    get nivel() { return this._nivel; }
    set nivel(valor) { this._nivel = valor; }

    get experiencia() { return this._experiencia; }
    set experiencia(valor) { this._experiencia = valor; }

    // Métodos abstratos
    atacar() { throw new Error("Método atacar deve ser implementado!"); }
    defender() { throw new Error("Método defender deve ser implementado!"); }

    subirNivel() {
        this._nivel++;
        this._forca += 5;
        this._pontosDeVida += 10;
        console.log(`${this._nome} subiu para o nível ${this._nivel}!`);
    }

    ganharExperiencia(pontos) {
        this._experiencia += pontos;
        if (this._experiencia >= 100) {
            this._experiencia -= 100;
            this.subirNivel();
        }
    }
}

// Classe Guerreiro que herda de Personagem
class Guerreiro extends Personagem {
    atacar(alvo) {
        let dano = this._forca * 2;
        alvo.pontosDeVida -= dano;
        console.log(`${this._nome} atacou ${alvo.nome} causando ${dano} de dano!`);
    }

    defender() {
        console.log(`${this._nome} se preparou para defender!`);
    }
}

// Classe Mago que herda de Personagem
class Mago extends Personagem {
    atacar(alvo) {
        let dano = this._forca * 1.5;
        alvo.pontosDeVida -= dano;
        console.log(`${this._nome} lançou um feitiço em ${alvo.nome} causando ${dano} de dano!`);
    }

    defender() {
        console.log(`${this._nome} conjurou um escudo mágico!`);
    }

    lançarFeitico() {
        console.log(`${this._nome} lançou um feitiço poderoso!`);
    }
}

// Classe Item
class Item {
    constructor(nome, aumento) {
        this._nome = nome;
        this._aumento = aumento;
    }

    // Getters e Setters
    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get aumento() { return this._aumento; }
    set aumento(valor) { this._aumento = valor; }

    usar(personagem) {
        personagem.forca += this._aumento;
        console.log(`${personagem.nome} usou ${this._nome} e agora tem ${personagem.forca} de força!`);
    }
}

// Classe Batalha
class Batalha {
    static lutar(personagem1, personagem2) {
        console.log(`${personagem1.nome} e ${personagem2.nome} estão lutando!`);
        while (personagem1.pontosDeVida > 0 && personagem2.pontosDeVida > 0) {
            personagem1.atacar(personagem2);
            if (personagem2.pontosDeVida <= 0) {
                console.log(`${personagem2.nome} foi derrotado!`);
                break;
            }
            personagem2.atacar(personagem1);
            if (personagem1.pontosDeVida <= 0) {
                console.log(`${personagem1.nome} foi derrotado!`);
                break;
            }
        }
    }
}

// Exemplo de uso
const guerreiro = new Guerreiro('Aragorn', 100, 20);
const mago = new Mago('Gandalf', 80, 15);
const espada = new Item('Espada Lendária', 10);

guerreiro.atacar(mago);
mago.lançarFeitico();
espada.usar(guerreiro);

Batalha.lutar(guerreiro, mago);
