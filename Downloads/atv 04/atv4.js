class Retangulo {
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }


    get base() { return this._base; }
    set base(valor) { this._base = valor; }

    get altura() { return this._altura; }
    set altura(valor) { this._altura = valor; }

    calcularArea() {
        return this._base * this._altura;
    }

   
    calcularPerimetro() {
        return 2 * (this._base + this._altura);
    }
}


const retangulo = new Retangulo(5, 10);
console.log(`Área: ${retangulo.calcularArea()}`);         
console.log(`Perímetro: ${retangulo.calcularPerimetro()}`); 
retangulo.base = 7;
retangulo.altura = 12;

console.log(`Nova Área: ${retangulo.calcularArea()}`);         
console.log(`Novo Perímetro: ${retangulo.calcularPerimetro()}`); 
