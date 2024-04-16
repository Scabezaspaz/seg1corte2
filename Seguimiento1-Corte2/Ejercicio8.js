function calcularPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }

    if (base === 0 && exponente < 0) {
        return "No se puede calcular la operación";
    }
    
    let resultado = 1;

    for (let i = 0; i < Math.abs(exponente); i++) {
        resultado *= base;
    }

    return exponente < 0 ? 1 / resultado : resultado;
}

// Ejemplo de uso
console.log(calcularPotencia(2, 3));
console.log(calcularPotencia(5, -2)); 
console.log(calcularPotencia(0, -5)); 
console.log(calcularPotencia(3.5, 2));