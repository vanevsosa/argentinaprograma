//Escriba un programa que solicite al usuario ingresar un número del 1 al 7 representando un día de la semana. Guardar 
//el programa en un archivo diasDeLaSemana.js. La semana comienza el lunes y termina el domingo.
//- Si el número es 1, muestra por consola el mensaje: "Hoy es lunes".
//- Si el número es 2, muestra por consola el mensaje: "Hoy es martes".
//- Si el número es 3, muestra por consola el mensaje: "Hoy es miércoles".
//- Y así sucesivamente ...
//- Para cualquier otro número, muestra por consola el mensaje: " "Número inválido".
//NOTA: utilizar la sentencia switch-case.

const readlineSync = require('readline-sync');

const numero = readlineSync.question('Ingrese un numero del 1 al 7: ');

let num = Number (numero);


switch (num) {

    case 1:
    console.log ("Hoy es lunes");
    break;

    case 2:
    console.log ("Hoy es martes");
    break;

    case 3:
    console.log ("Hoy es miercoles");
    break;

    case 4:
    console.log ("Hoy es jueves");
    break;
    
    case 5:
    console.log ("Hoy es viernes");
    break;

    case 6:
    console.log ("Hoy es sabado");
    break;

    case 7:
    console.log ("Hoy es domingo");
    break;

    default:
    console.log ("El numero ingresado no es correcto");

}