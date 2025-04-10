function calcular(operacion) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let resultado;
  
    if (isNaN(n1) || isNaN(n2)) {
      resultado = "¡Ingresa ambos números!";
    } else {
      switch (operacion) {
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case '*': resultado = n1 * n2; break;
        case '/': resultado = n2 !== 0 ? n1 / n2 : "No se puede dividir entre 0"; break;
      }
    }
  
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
  