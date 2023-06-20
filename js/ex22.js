console.log("Ejercicio 22");

// 22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola
// cada letra de la palabra en una línea diferente utilizando un bucle `for`.

let palabra = prompt("Ejercicio 22. Introduce una palabra: ");

for(let i = 0; i <= palabra.length;i++){
    console.log(palabra[i]);
}