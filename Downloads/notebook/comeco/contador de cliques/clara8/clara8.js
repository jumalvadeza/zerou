function calculate() {
    var number = parseFloat(document.getElementById('numberInput').value);
    var results = document.getElementById('results');
    var absolute = Math.abs(number);
    var integerPart = Math.floor(number);
    var nearestInteger = Math.round(number);
    var squareRoot = Math.sqrt(number);
    var cubicRoot = Math.cbrt(number);
    var square = Math.pow(number, 2);
    var cube = Math.pow(number, 3);
    results.innerHTML = `
        <p>Valor Absoluto: ${absolute}</p>
        <p>Parte Inteira: ${integerPart}</p>
        <p>Inteiro Mais Próximo: ${nearestInteger}</p>
        <p>Raiz Quadrada: ${squareRoot}</p>
        <p>Raiz Cúbica: ${cubicRoot}</p>
        <p>Elevado a 2: ${square}</p>
        <p>Elevado a 3: ${cube}</p>
    `;
}
