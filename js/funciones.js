//funcion para calcular peso ideal
function calcularPesoIdeal() {
  //capturamos la edad
  var edad = document.getElementById("txt_edad").value;
  //calculamos peso ideal usando formula edad * 2 + 8
  var pesoIdeal = edad * 2 + 8;
  //mostramos el peso ideal en la interfaz
  document.getElementById("cnt_peso_ideal").innerHTML =
    "Peso Ideal Es " + pesoIdeal + " Kilos";

  //Calculamos estado de peso
  calcularEstadoPeso(pesoIdeal);
}

//funcion para estado de peso
function calcularEstadoPeso(pesoIdeal) {
  //capturamos el peso actual
  var pesoActual = document.getElementById("txt_peso_actual").value;
  var estadoPeso = "";
  var imagen = "";
  var diferenciaPeso = "";

  //estructura de decision para comparar peso actual y peso ideal
  if (pesoActual == pesoIdeal) {
    estadoPeso = "peso ideal";
    imagen = "correctweight.png";
  } else {
    //evaluamos si esta sobrepeso o bajo peso
    if (pesoActual > pesoIdeal) {
      estadoPeso = "sobrepeso";
      imagen = "overweight.png";
    } else {
      estadoPeso = "bajo peso";
      imagen = "underweight.png";
    }
  }

  diferenciaPeso = pesoActual - pesoIdeal;
  //control de estado de peso
  if (diferenciaPeso > 0) {
    document.getElementById(
      "cnt_diferencia_peso"
    ).innerHTML = `Diferencia de peso: ${diferenciaPeso} kg sobre el peso ideal`;
  } else if (diferenciaPeso < 0) {
    document.getElementById("cnt_diferencia_peso")
    .innerHTML = `Diferencia de peso: ${diferenciaPeso} kg bajo el peso ideal`;
  } else {
    document.getElementById("cnt_diferencia_peso").innerHTML = `No hay diferencia de peso`;
  }

  document.getElementById("cnt_estado_peso_texto").innerHTML =
    "Estado de peso es: " + estadoPeso + ".";
  document.getElementById(
    "cnt_estado_peso_imagen"
  ).innerHTML = `<img src="img/${imagen}" width="128" height="128">`;
}
