console.log("Ejercicio 10");

// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del
//     1 al 7) y muestre en la consola el nombre del día correspondiente (por ejemplo, 1
//     corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let diaSemana = prompt("Ejercicio 10. Introduce un dia de la semana: ");
let dias = ["", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

if(diaSemana > 0 && diaSemana < 8){
    console.log("El día de la semana corresponde a " + dias[diaSemana]);
} else{
    console.log("Introduce un número válido.");
}