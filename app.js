

import info, { suma, resta, multiplicacion, division } from "./calculadora.js";

function calcular(operacion, a, b) {
    try {
        switch (operacion.toLowerCase()) {
            case "suma":
                console.log(`Resultado de la suma: ${suma(a, b)}`);
                break;
            case "resta":
                console.log(`Resultado de la resta: ${resta(a, b)}`);
                break;
            case "multiplicacion":
                console.log(`Resultado de la multiplicación: ${multiplicacion(a, b)}`);
                break;
            case "division":
                console.log(`Resultado de la división: ${division(a, b)}`);
                break;
            default:
                console.log("Operación no válida. Use suma, resta, multiplicacion o division.");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Mensaje informativo
console.log(info());

// Pruebas
calcular("suma", 10, 5);
calcular("resta", 10, 5);
calcular("multiplicacion", 10, 5);
calcular("division", 10, 5);
