

class Empresa {
    constructor(nome, cnpj, endereco = null, dataDeCriacao = null) {
        this._nome = nome;
        this._cnpj = cnpj;
        this._endereco = endereco;
        this._dataDeCriacao = dataDeCriacao;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get cnpj() { return this._cnpj; }
    set cnpj(valor) { this._cnpj = valor; }

    get endereco() { return this._endereco; }
    set endereco(valor) { this._endereco = valor; }

    get dataDeCriacao() { return this._dataDeCriacao; }
    set dataDeCriacao(valor) { this._dataDeCriacao = valor; }

    toString() {
        return `Nome: ${this._nome}\nCNPJ: ${this._cnpj}\nEndereço: ${this._endereco ? this._endereco.toString() : 'Não informado'}\nData de Criação: ${this._dataDeCriacao ? this._dataDeCriacao.toString() : 'Não informado'}`;
    }
}

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

    toString() {
        return `${this._rua}, ${this._numero}, ${this._complemento ? this._complemento + ', ' : ''}${this._bairro}, ${this._cidade} - ${this._estado}, ${this._cep}`;
    }
}

// Classe Data (exemplo simples para referência)
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


const endereco = new Endereco("Rua das Palmeiras", 123, "Apto 12", "Jardim Tropical", "São Paulo", "SP", "01000-000");
const dataDeCriacao = new Data(1, 1, 2000); // 1/1/2000

const empresa = new Empresa("Share Ai", "12.345.678/0001-99", endereco, dataDeCriacao);

console.log(empresa.toString());
