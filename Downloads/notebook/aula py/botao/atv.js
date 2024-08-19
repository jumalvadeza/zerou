
var produtoNome;


function comprarProduto() {
 
  produtoNome = document.getElementById("produtoNome").value;

 
  if (!produtoNome) {
    alert("Por favor, insira o nome do produto.");
    return;
  }

  
  document.getElementById("inputValores").style.display = "block";
}


function calcularTroco() {
  var preco = parseFloat(document.getElementById("preco").value);
  var pagamento = parseFloat(document.getElementById("pagamento").value);


  if (isNaN(preco) || isNaN(pagamento)) {
    alert("Por favor, insira valores válidos.");
    return;
  }


var produtoNome;


function comprarProduto() {
 
  produtoNome = document.getElementById("produtoNome").value;

 
  if (!produtoNome) {
    alert("Por favor, insira o nome do produto.");
    return;
  }

 
  document.getElementById("inputValores").style.display = "block";
}


function calcularTroco() {
  var preco = parseFloat(document.getElementById("preco").value);
  var pagamento = parseFloat(document.getElementById("pagamento").value);


  if (isNaN(preco) || isNaN(pagamento)) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  
  var troco = pagamento - preco;
  if (troco < 0) {
    alert("O valor pago é insuficiente.");
    return;
  }

  alert("Compra do produto '" + produtoNome + "' realizada com sucesso!\n\nTroco: R$" + troco.toFixed(2));
}

  var troco = pagamento - preco;
  if (troco < 0) {
    alert("O valor pago é insuficiente.");
    return;
  }


  alert("Compra do produto '" + produtoNome + "' realizada com sucesso!\n\nTroco: R$" + troco.toFixed(2));
}
