class Hora {
    constructor(hora) {
        this._hora = hora;
    }

    // Getter e Setter
    get hora() { return this._hora; }
    set hora(valor) { this._hora = valor; }
}

class Data {
    constructor(dia, mes, ano) {
        this._dia = dia;
        this._mes = mes;
        this._ano = ano;
    }

    // Getters e Setters
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

class DataHora {
    constructor(data, hora) {
        this._data = data;
        this._hora = hora;
    }

    // Getters e Setters
    get data() { return this._data; }
    set data(valor) { this._data = valor; }

    get hora() { return this._hora; }
    set hora(valor) { this._hora = valor; }

    toString() {
        return `${this._data.toString()} ${this._hora.hora}`;
    }
}

// Exemplo de uso
const data = new Data(5, 9, 2024); // 5/9/2024
const hora = new Hora("14:30"); // 14:30
const dataHora = new DataHora(data, hora);

console.log(dataHora.toString()); // Saída: 5/9/2024 14:30
