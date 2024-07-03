"use strict";
class Calculator {
    suma(a, b) {
        return a + b;
    }
    resta(a, b) {
        return a - b;
    }
    multiplicacion(a, b) {
        return a * b;
    }
    division(a, b) {
        if (b === 0) {
            throw new Error("La división entre 0, no está permitida.");
        }
        return a / b;
    }
    porcentaje(a, b) {
        return (a * b) / 100;
    }
    limpiar() {
        return 0;
    }
}
const calculator = new Calculator();
console.log("Suma: ", calculator.suma(5, 3));
console.log("Resta: ", calculator.resta(5, 3));
console.log("Multiplicación: ", calculator.multiplicacion(5, 3));
console.log("División: ", calculator.division(5, 3));
console.log("División: ", calculator.division(5, 3));
console.log("Porcentaje: ", calculator.porcentaje(5, 3));
console.log("Limpiar Operación: ", calculator.limpiar());
