const calcular = document.getElementById("calcResult");

function imc() {
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (altura == "" || peso == "") {
    alert("Preencha todos os campos para poder fazer o calculo.");
  } else if (altura !== "" && peso !== "") {
    let valorIMC = (peso / (altura * altura)).toFixed(1);
    let sexo = document.getElementsByName("sexo");

    if (sexo[0].checked) {
      if (valorIMC <= 19) {
        resultado.textContent = "Abaixo do Peso";
        document.querySelector("#resultado").style.background = "yellow";
      } else if (valorIMC <= 25.7) {
        resultado.textContent = "Peso Normal";
        document.querySelector("#resultado").style.background = "green";
      } else if (valorIMC <= 27.3) {
        resultado.textContent = "Marginalmente Acima do Peso";
        document.querySelector("#resultado").style.background = "OrangeRed";
      } else if (valorIMC <= 32.3) {
        resultado.textContent = "Acima do Peso Ideal";
        document.querySelector("#resultado").style.background = "orange";
      } else {
        resultado.textContent = "Obeso";
        document.querySelector("#resultado").style.background = "red";
      }
    } else {
      if (valorIMC <= 19) {
        resultado.textContent = "Abaixo do Peso";
        document.querySelector("#resultado").style.background = "yellow";
      } else if (valorIMC <= 25.7) {
        resultado.textContent = "Peso Normal";
        document.querySelector("#resultado").style.background = "green";
      } else if (valorIMC <= 27.3) {
        resultado.textContent = "Marginalmente Acima do Peso";
        document.querySelector("#resultado").style.background = "OrangeRed";
      } else if (valorIMC <= 32.3) {
        resultado.textContent = "Acima do Peso Ideal";
        document.querySelector("#resultado").style.background = "orange";
      } else {
        resultado.textContent = "Obeso";
        document.querySelector("#resultado").style.background = "red";
      }
    }
  }
}
