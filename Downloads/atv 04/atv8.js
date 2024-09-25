class Cliente {
    constructor(nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, nivelEscolaridade) {
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._endereco = endereco;
        this._email = email;
        this._ocupacao = ocupacao;
        this._rendaAnual = rendaAnual;
        this._nivelEscolaridade = nivelEscolaridade;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get cpf() { return this._cpf; }
    set cpf(valor) { this._cpf = valor; }

    get dataNascimento() { return this._dataNascimento; }
    set dataNascimento(valor) { this._dataNascimento = valor; }

    get endereco() { return this._endereco; }
    set endereco(valor) { this._endereco = valor; }

    get email() { return this._email; }
    set email(valor) { this._email = valor; }

    get ocupacao() { return this._ocupacao; }
    set ocupacao(valor) { this._ocupacao = valor; }

    get rendaAnual() { return this._rendaAnual; }
    set rendaAnual(valor) { this._rendaAnual = valor; }

    get nivelEscolaridade() { return this._nivelEscolaridade; }
    set nivelEscolaridade(valor) { this._nivelEscolaridade = valor; }

    toString() {
        return `Relatório do Cliente:
Nome: ${this._nome}
CPF: ${this._cpf}
Data de Nascimento: ${this._dataNascimento}
Endereço: ${this._endereco}
Email: ${this._email}
Ocupação: ${this._ocupacao}
Renda Anual: R$ ${this._rendaAnual}
Nível de Escolaridade: ${this._nivelEscolaridade}`;
    }
}

const cliente = new Cliente(
    'Júlia malvadeza',
    '873.478.878-90',
    '01/01/1980',
    'Rua uruparu, 37',
    'julia.malvadeza@gmail.com',
    'Analista de Sistemas',
    60000,
    'Superior Completo'
);

console.log(cliente.toString());
