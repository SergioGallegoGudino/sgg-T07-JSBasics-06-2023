console.log("Ejercicio 30");

// 30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un
// número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
// `while`, una condición `if` y una variable acumuladora.

let numeroPerfecto = prompt("Ejercicio 30. Introduce el numero a comprobar si es perfecto:");

let contadorDivisores = 0;
let contadorPerfecto = 1;

while(contadorPerfecto < numeroPerfecto){
    if(numero%1 == 0){
        contadorDivisores++;
    }
    contadorPerfecto++;
}

if(contadorDivisores == numeroPerfecto){
    console.log("EL numero es perfecto");
} else{
    console.log("El numero no es perfecto");
}