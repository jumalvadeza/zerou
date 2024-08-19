
var inputIdade = document.getElementById("idadeInput");


inputIdade.addEventListener("keydown", function(event) {
   
    if (event.keyCode === 13) {
        verificarIdade();
    }
});

function verificarIdade() {
   
    var idade = inputIdade.value;

    if (idade >= 18) {
        alert("Você é maior de idade.");
    } else {
        alert("Você é menor de idade.");
    }
}