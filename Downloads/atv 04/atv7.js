class Produto {
    constructor(nome, preco, quantidade) {
        this._nome = nome;
        this._preco = preco;
        this._quantidade = quantidade;
    }

    get nome() { return this._nome; }
    set nome(valor) { this._nome = valor; }

    get preco() { return this._preco; }
    set preco(valor) { this._preco = valor; }

    get quantidade() { return this._quantidade; }
    set quantidade(valor) { this._quantidade = valor; }

    calcularTotal() {
        return this._preco * this._quantidade;
    }
}

const produto = new Produto('Cadeira', 150, 4);
console.log(`Nome: ${produto.nome}`); 
console.log(`Preço: R$ ${produto.preco}`); 
console.log(`Quantidade: ${produto.quantidade}`); 
console.log(`Total: R$ ${produto.calcularTotal()}`); 
