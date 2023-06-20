console.log("Ejercicio 33");

// 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
// consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
// acumuladora.

let palabraNorm = prompt("Ejercicio 33. Introduce una palabra para devolverla invertida:");
let contPalabra = palabraNorm.length;
let palabraInv = "";

while(contPalabra != 0){
    contPalabra--;
    palabraInv = palabraInv + palabraNorm[contPalabra];
    
}

if(palabraInv == ""){
    console.log("No has introducido una palabra valida");
} else{
    console.log(palabraInv);
}

