
class Calculator {
    suma(a: number, b: number): number {
        return a + b;
    }

    resta(a: number, b: number): number {
        return a - b;
    }

    multiplicacion(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number {
        if (b === 0) {
            throw new Error("La división entre 0, no está permitida.");
        }
        return a / b;
    }

    porcentaje(a: number, b: number): number {
        return (a * b) / 100;
    }

    limpiar(): number {
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
