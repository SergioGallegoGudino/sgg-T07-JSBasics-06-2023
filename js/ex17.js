console.log("Ejercicio 17");

// 17. Crea un programa que solicite al usuario ingresar un número y muestre en la consola todos
// los números pares desde 2 hasta ese número utilizando un bucle `while`.

let numeroComparar = prompt("Ejercicio 17. Introduce un numero para mostrar su pares: ");

let numeroPar = 2;

while(numeroComparar >= numeroPar){
    if(numeroPar%2 == 0){
        console.log(numeroPar);
    }

    numeroPar++;
}