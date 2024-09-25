












class ContaCorrente {
    constructor(numeroConta, saldo = 899) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    
    getSaldo() {
        return this.saldo;
    }


    setSaldo(novoSaldo) {
        this.saldo = novoSaldo;
    }


    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("O valor de depósito deve ser positivo.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente ou valor de saque inválido.");
        }
    }


    toString() {
        return `Conta: ${this.numeroConta}\nSaldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

const conta = new ContaCorrente(200607);
console.log(conta.toString()); 

