console.log("Ejercicio 28");

// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let numPrimo = prompt("Ejercicio 28. Introduce un numero para mostrar si es primo o no:");

let contDivisores = 0;

for(let i = 2; i < numPrimo; i++){
    if(numPrimo % i == 0){
        contDivisores++;
    }
}

if(contDivisores != 0){
    console.log("El numero no es primo.");
} else{
    console.log("El numero es primo.");
}