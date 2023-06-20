console.log("Ejercicio 8");

// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
// de ellos.

let num1 = prompt("Ejercicio 8. Indique el primer numero:");
let num2 = prompt("Ejercicio 8. Indique el segundo numero:");
let num3 = prompt("Ejercicio 8. Indique el tercer numero:");
let mayor = null;


if(num1 > num2){
    mayor = num1;
} else{
    mayor = num2;
}

if(num3 > mayor){
    mayor = num3;
}

console.log("El numero mas grande es " + mayor);