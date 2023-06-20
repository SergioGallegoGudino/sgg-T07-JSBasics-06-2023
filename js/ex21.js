console.log("Ejercicio 21");

// 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
// multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`

let numeroMultiplicacion = prompt("Ejercicio 21. Introduce un numero");
let conMultiplicacion = 1;
do{
    console.log(`${numeroMultiplicacion}x${conMultiplicacion}=${conMultiplicacion*numeroMultiplicacion}`);
    conMultiplicacion++;
}while(numeroMultiplicacion >= conMultiplicacion)