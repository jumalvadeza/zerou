document.getElementById("converterBtn").addEventListener("click", converterTemperatura);

function converterTemperatura() {
  var tempInput = parseFloat(document.getElementById("tempInput").value);
  var converterDe = document.getElementById("converterDe").value;
  var resultado;

  if (converterDe === "celsius") {
    resultado = (tempInput * 9/5) + 32;
    document.getElementById("resultado").innerHTML = tempInput + "°C é igual a " + resultado + "°F.";
  } else {
    resultado = (tempInput - 32) * 5/9;
    document.getElementById("resultado").innerHTML = tempInput + "°F é igual a " + resultado + "°C.";
  }
}
