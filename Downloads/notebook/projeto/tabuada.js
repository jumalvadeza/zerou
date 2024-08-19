function exibirTabuada() {
    var numero = document.getElementById("numero").value;
    var tabuadaHTML = "<h3>Tabuada do " + numero + ":</h3>";
    
    for (var i = 1; i <= 10; i++) {
        tabuadaHTML += "<p>" + numero + " x " + i + " = " + (numero * i) + "</p>";
    }
    
    document.getElementById("tabuada").innerHTML = tabuadaHTML;

function verificarTecla(e) {
            if (e.key === 'Enter') {
                exibirTabuada();
    
}}}