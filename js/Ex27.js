console.log("Ejercicio 27");

// 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
// todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
// condición `if`.

let numeroIf = prompt("Ejercicio 27. Introduce un numero para mostrar su suma de impares:");

let sumaImpares = 0;
let contImpares = 1;

while(contImpares <= numeroIf){
    if(contImpares%2!=0){
        sumaImpares = sumaImpares + contImpares;
    }

    contImpares++;

}

console.log(sumaImpares);