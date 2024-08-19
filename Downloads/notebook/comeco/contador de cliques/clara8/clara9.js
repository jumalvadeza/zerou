function obterResultadoElemento() {
    return document.getElementById('resultado');
}

function lidarComCliqueDoBotao(botaoId) {
    var resultado = obterResultadoElemento();
    var acaoAnterior = resultado.innerHTML;
    var novaAcao = "Botão " + botaoId + " foi pressionado.";
    resultado.innerHTML = acaoAnterior + "<br>" + novaAcao;
}

document.getElementById('botao1').addEventListener('click', function() {
    lidarComCliqueDoBotao(1);
});

document.getElementById('botao2').addEventListener('click', function() {
    lidarComCliqueDoBotao(2);
});

document.getElementById('botao3').addEventListener('click', function() {
    lidarComCliqueDoBotao(3);
});

document.getElementById('botao4').addEventListener('click', function() {
    lidarComCliqueDoBotao(4);
});
