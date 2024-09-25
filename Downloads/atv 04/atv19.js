
class Veiculo {
    constructor(placa, modelo, capacidade) {
        this._placa = placa;
        this._modelo = modelo;
        this._capacidade = capacidade;
        this._ocupacao = 0; 

    get placa() { return this._placa; }
    set placa(valor) { this._placa = valor; }

    get modelo() { return this._modelo; }
    set modelo(valor) { this._modelo = valor; }

    get capacidade() { return this._capacidade; }
    set capacidade(valor) { this._capacidade = valor; }

    get ocupacao() { return this._ocupacao; }
    set ocupacao(valor) { this._ocupacao = valor; }

    verificarLotacao() {
        return this._ocupacao > this._capacidade;
    }

    atualizarOcupacao(adicional) {
        this._ocupacao += adicional;
        if (this._ocupacao > this._capacidade) {
            console.log(`A capacidade do veículo foi ultrapassada!`);
        }
    }
}

// Classe Onibus que herda de Veiculo
class Onibus extends Veiculo {
    constructor(placa, modelo, capacidade, linha) {
        super(placa, modelo, capacidade);
        this._linha = linha;
    }

    // Getter e Setter
    get linha() { return this._linha; }
    set linha(valor) { this._linha = valor; }
}

// Classe Metro que herda de Veiculo
class Metro extends Veiculo {
    constructor(placa, modelo, capacidade, numeroDeVagoes) {
        super(placa, modelo, capacidade);
        this._numeroDeVagoes = numeroDeVagoes;
    }

    // Getter e Setter
    get numeroDeVagoes() { return this._numeroDeVagoes; }
    set numeroDeVagoes(valor) { this._numeroDeVagoes = valor; }
}

// Classe Bilhete
class Bilhete {
    constructor(codigo, saldo) {
        this._codigo = codigo;
        this._saldo = saldo;
    }

    // Getters e Setters
    get codigo() { return this._codigo; }
    set codigo(valor) { this._codigo = valor; }

    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = valor; }

    // Métodos
    recarregar(soma) {
        this._saldo += soma;
        console.log(`Saldo recarregado. Novo saldo: R$${this._saldo}`);
    }
}

// Exemplo de uso
const onibus = new Onibus("ABC-1234", "Mercedes", 40, 101);
onibus.atualizarOcupacao(45); // Testa a capacidade ultrapassada

const metro = new Metro("XYZ-5678", "Alstom", 200, 8);
metro.atualizarOcupacao(150); // Não ultrapassa a capacidade

const bilhete = new Bilhete("123456", 10);
bilhete.recarregar(15); // Recarrega o bilhete

console.log(onibus.verificarLotacao()); 
console.log(metro.verificarLotacao()); 
