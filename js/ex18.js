console.log("Ejercicio 18");

// 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

let numeroLimite = prompt("Ejercicio 18. Introduce el numero límite para la suma natural:");

let suma = 0;
let cont = 1;

do{
    suma = suma + cont;
    if(numeroLimite > suma){
        console.log(suma);
    }
    cont++;
} while(numeroLimite >= suma)