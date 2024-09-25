class Calculadora {
    constructor(a = 0, b = 0) {
        this._a = a;
        this._b = b;
    }

    get a() { return this._a; }
    set a(valor) { this._a = valor; }

    get b() { return this._b; }
    set b(valor) { this._b = valor; }

    somar() { return this._a + this._b; }
    subtrair() { return this._a - this._b; }
    multiplicar() { return this._a * this._b; }
    dividir() { 
        if (this._b === 0) throw new Error("Não é possível dividir por zero.");
        return this._a / this._b; 
    }
}

const calc = new Calculadora(10, 5);
console.log(`Soma: ${calc.somar()}`);       
console.log(`Subtração: ${calc.subtrair()}`); 
console.log(`Multiplicação: ${calc.multiplicar()}`); 
console.log(`Divisão: ${calc.dividir()}`);   
