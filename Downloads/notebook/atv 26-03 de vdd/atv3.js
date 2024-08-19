function calcularSoma() {
    
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
  
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, insira números válidos.');
      return;
    }
  
   
    var soma = somarNumeros(num1, num2);
  
  
    alert('A soma de ' + num1 + ' e ' + num2 + ' é: ' + soma);
  }
  
  function somarNumeros(num1, num2) {
    return num1 + num2;
  }
  