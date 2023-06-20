console.log("Ejercicio 20");

// 20. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde ese número hasta 0 utilizando un bucle `while`.

let numeroWhilePar = prompt("Ejercicio 20. Introduce el numero para buscar sus pares: ");

while(numeroWhilePar != 0){
    if(numeroWhilePar%2==0){
        console.log(numeroWhilePar);
    }
    numeroWhilePar--;
}