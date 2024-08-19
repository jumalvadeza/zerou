document.getElementById('calcular').addEventListener('click', function() {
    calcularFatorial();
  });
  
  function calcularFatorial() {
    var numero = document.getElementById('numero').value;
    var resultadoElemento = document.getElementById('resultado');
    
    if (numero < 1 || numero > 21) {
      resultadoElemento.textContent = 'Por favor, digite um número entre 1 e 21.';
      return;
    }
  
    var fatorial = 1;
    var fatorialString = '';
    for (var i = numero; i > 0; i--) {
      fatorial *= i;
      if (i !== numero) {
        fatorialString += ' x ';
      }
      fatorialString += i;
    }
    fatorialString += ' = ' + fatorial;
  
    resultadoElemento.textContent = 'O fatorial de ' + numero + ' é: ' + fatorialString;
  }
  