console.log("Ejercicio 24");

// 24. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los dígitos del número utilizando un bucle `while`.

let numeroDigitos = prompt("Ejercicio 24. Introduce un numero para solicitar sus digitos:");

let contDigitos = 0;
let sumaDigitos = 0;

while(contDigitos < numeroDigitos.length){
    sumaDigitos = sumaDigitos + parseInt(numeroDigitos[contDigitos]);
    contDigitos++;
}


console.log(sumaDigitos);