class Endereco {
    constructor(rua, numero, complemento, bairro, cidade, estado, cep) {
        this._rua = rua;
        this._numero = numero;
        this._complemento = complemento;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
        this._cep = cep;
    }

    get rua() { return this._rua; }
    set rua(valor) { this._rua = valor; }

    get numero() { return this._numero; }
    set numero(valor) { this._numero = valor; }

    get complemento() { return this._complemento; }
    set complemento(valor) { this._complemento = valor; }

    get bairro() { return this._bairro; }
    set bairro(valor) { this._bairro = valor; }

    get cidade() { return this._cidade; }
    set cidade(valor) { this._cidade = valor; }

    get estado() { return this._estado; }
    set estado(valor) { this._estado = valor; }

    get cep() { return this._cep; }
    set cep(valor) { this._cep = valor; }
}

const endereco = new Endereco(
    "Rua Santa Tereza", 4, "casa", "Ibura", "Jaboatão dos Guararapes", "PE", "0987-987"
);

console.log(endereco.rua);         
console.log(endereco.numero);      
console.log(endereco.complemento); 
console.log(endereco.bairro);      
console.log(endereco.cidade);      
console.log(endereco.estado);      
console.log(endereco.cep);         
