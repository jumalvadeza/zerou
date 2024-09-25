class Data {
    constructor(dia, mes, ano) {
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }

    get dia() { return this._dia; }
    set dia(valor) { this._dia = valor; }

    get mes() { return this._mes; }
    set mes(valor) { this._mes = valor; }

    get ano() { return this._ano; }
    set ano(valor) { this._ano = valor; }

    toString() {
        return `${this._dia}/${this._mes}/${this._ano}`;
    }
}

const data = new Data(5, 10, 2024)
console.log(data.toString()); 

data.dia = 15;
data.mes = 12;
data.ano = 2025;

console.log(data.toString()); 
