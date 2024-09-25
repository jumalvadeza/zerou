class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this._ladoA = ladoA;
        this._ladoB = ladoB;
        this._ladoC = ladoC;
    }

    get ladoA() { return this._ladoA; }
    set ladoA(valor) { this._ladoA = valor; }

    get ladoB() { return this._ladoB; }
    set ladoB(valor) { this._ladoB = valor; }

    get ladoC() { return this._ladoC; }
    set ladoC(valor) { this._ladoC = valor; }

    calcularArea() {
        const s = (this._ladoA + this._ladoB + this._ladoC) / 2;
        const area = Math.sqrt(s * (s - this._ladoA) * (s - this._ladoB) * (s - this._ladoC));
        return area;
    }

    calcularPerimetro() {
        return this._ladoA + this._ladoB + this._ladoC;
    }
}

const triangulo = new Triangulo(3, 4, 5);

console.log(triangulo.ladoA);
console.log(triangulo.ladoB); 
console.log(triangulo.ladoC); 
console.log(triangulo.calcularArea());
console.log(triangulo.calcularPerimetro()); 
