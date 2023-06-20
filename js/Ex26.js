console.log("Ejercicio 26");

// 26. Escribe un programa que solicite al usuario ingresar un número y luego muestre en la
// consola todos los números pares desde 0 hasta ese número utilizando un bucle `for` y una
// condición `if`

let numeroParIf = prompt("Ejercicio 26. Introduce un numero para mostrar sus pares: ");

for(let i = 0; i <= numeroParIf; i++){
    if(i%2==0){
        console.log(i);
    }
}