function esPalindromico(numero) {
    if (!Number.isInteger(numero)) {
        return "El valor debe ser un número entero";
    }
    const numString = Math.abs(numero).toString();
    let numeroInvertido = "";

    for (let i = numString.length - 1; i >= 0; i--) {
        numeroInvertido += numString[i];
    }

    return numString === numeroInvertido;
}

console.log(esPalindromico(12321)); 
console.log(esPalindromico(54765)); 
console.log(esPalindromico(-101)); 
console.log(esPalindromico(3.14)); 