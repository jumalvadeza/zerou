function converter() {
    
    var valorReal = document.getElementById("realInput").value;
    var taxaDeConversao = 5.12; 
    var valorDolar = valorReal * taxaDeConversao;
    document.getElementById("resultado").innerHTML = "Valor em Dólar: $" + valorDolar.toFixed(2);
    
}
