console.log("Ejercicio 25");

// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
// palabra de la frase en una línea diferente utilizando un bucle `for...of`.

let frase = prompt("Ejercicio 25. Introduce una frase");
let fraseSeparada = frase.split(" ");

for(let value of fraseSeparada){4
    console.log(value);
}
