function obterResultadoElemento(){
    return document.getElementById('resultado');
}

function lidarComCliqueDoBotao(botaoId) {
    let resultado = obterResultadoElemento();
    let acaoAnterior = resultado.innerHTML;
    let novaAcao = 'Clicou no botão' + botaoId;
    resultado.innerHTML = acaoAnterior + "<br>" + novaAcao;
}

document.getElementById('b1').addEventListener('click', function(){
    lidarComCliqueDoBotao(1);
});
document.getElementById('b2').addEventListener('click', function(){
    lidarComCliqueDoBotao(2);
});
document.getElementById('b3').addEventListener('click', function(){
    lidarComCliqueDoBotao(3);
});
document.getElementById('b4').addEventListener('click', function(){
    lidarComCliqueDoBotao(4);
});
