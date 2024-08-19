document.addEventListener('DOMContentLoaded', function() {
    let botao = document.getElementById('meuBotao');
    let inputNumero = document.getElementById('inputNumero');

    botao.addEventListener('click', function() {
        let valor = parseFloat(inputNumero.value);
        let resultadoSection = document.querySelector('#resultado');

        if (isNaN(valor)) {
            resultadoSection.textContent = 'Por favor, insira um número válido.';
        } else {
            let dobro = valor * 2;
            let metade = valor / 2;

            resultadoSection.textContent = 'O dobro de ' + valor + ' é: ' + dobro + '. A metade é: ' + metade + '.';
        }
    });

    inputNumero.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            botao.click();
        }
    });
});
