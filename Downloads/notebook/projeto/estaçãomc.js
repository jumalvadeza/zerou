document.getElementById('descobrirBtn').addEventListener('click', function() {
    descobrirEstacao();
  });
  
  function descobrirEstacao() {
    const mesInput = document.getElementById('mes').value;
    const mes = parseInt(mesInput);
  
    if (mes >= 1 && mes <= 12) {
      let estacao;
  
      switch(mes) {
        case 1:
        case 2:
        case 12:
          estacao = 'Verão';
          break;
        case 3:
        case 4:
        case 5:
          estacao = 'Outono';
          break;
        case 6:
        case 7:
        case 8:
          estacao = 'Inverno';
          break;
        case 9:
        case 10:
        case 11:
          estacao = 'Primavera';
          break;
      }
  
      document.getElementById('resultado').textContent = `No mês ${mes} estamos na estação ${estacao}.`;
    } else {
      document.getElementById('resultado').textContent = 'Por favor, insira um número de mês válido (entre 1 e 12).';
    }
  }
  