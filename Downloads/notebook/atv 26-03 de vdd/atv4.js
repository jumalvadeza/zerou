var frutasFavoritas = ['Maçã', 'Banana', 'Morango', 'Limão', 'Ceta'];

function imprimirFrutas() {
  var lista = document.getElementById('frutasLista');

  lista.innerHTML = '';

  for (var i = 0; i < frutasFavoritas.length; i++) {
    var fruta = frutasFavoritas[i];

    var itemLista = document.createElement('li');

    itemLista.textContent = fruta;

    lista.appendChild(itemLista);
  }
}

window.onload = imprimirFrutas;
