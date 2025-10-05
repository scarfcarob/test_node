

function validarNumero(num) {
    if (typeof num !== "number" || isNaN(num)) {
        throw new Error("El valor ingresado no es un número válido");
    }
}

export function suma(a, b) {
    validarNumero(a);
    validarNumero(b);
    return a + b;
}

export function resta(a, b) {
    validarNumero(a);
    validarNumero(b);
    return a - b;
}

export function multiplicacion(a, b) {
    validarNumero(a);
    validarNumero(b);
    return a * b;
}

export function division(a, b) {
    validarNumero(a);
    validarNumero(b);
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}


export default function info() {
    return "Este módulo permite realizar operaciones matemáticas: suma, resta, multiplicación y división.";
}
