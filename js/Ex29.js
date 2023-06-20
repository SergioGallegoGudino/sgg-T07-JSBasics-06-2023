console.log("Ejercicio 29");

// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador

let palabraVocal = prompt("Ejercicio 29. Introduce una palabra para contar sus vocales:");
let vocales = ["A","a","e","E","i","I","o","O","u","U"]
let contadorVocales = 0;

for (let i = 0; i < palabraVocal.length; i++) {
    if(vocales.includes(palabraVocal[i])){
        contadorVocales++;
    }
}

if(contadorVocales != 0){
    console.log("La palabra tiene vocales con un total de " + contadorVocales);
} else{
    console.log("La palabra no tiene vocales.");
}