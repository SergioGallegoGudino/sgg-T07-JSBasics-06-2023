console.log("Ejercicio 31");

// 31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
// condición `if` y una función auxiliar para verificar si un número es primo.

let numPrimoAux = prompt("Ejercicio 31. Introduce un numero para mostrar sus primos:");

let contDivisor = 0;

for(let i = 2; i < numPrimo; i++){
    if(numPrimo % i == 0){
        contDivisor++;
        console.log(i);
    }
}

let esPrimo = function contPrimos(){
    if(contDivisor != 0){
        return false;
    } else{
        return true;
    }
}

if(esPrimo){
    console.log("El numero es primo");
} else{
    console.log("El numero no es primo");
}
