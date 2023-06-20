console.log("Ejercicio 32");

// 32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
// de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

let numFactorial = prompt("Ejercicio 32. Introduce un numero para devolver su factorial:");

let contFactorial = 1;

for (let i = 1; i < numFactorial; i++) {
    contFactorial = contFactorial * i;
}

console.log(contFactorial);