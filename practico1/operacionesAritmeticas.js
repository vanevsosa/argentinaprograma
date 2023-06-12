// PARTE 2: COMANDOS BÁSICOS 3. Operadores aritméticos:

// a. Crea cuatro variables que contengan valores numéricos.
let num1 = 10;
let num2 = 12;
let num3 = 19;
let num4 = 21;

// b. Suma las dos primeras variables y guarda el resultado en otra variable.
console.log (num1 + num2);
let num5 = 22;

// c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
console.log (num4 - num3);
let num6 = 2;

// d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el resultado en una variable llamada 
// resultadoFinal. El producto debe ser 44. Si no lo es, deberá ajustar algunos de los valores de entrada iniciales.
console.log (num5 * num6);
let resultadoFinal = 44;

// e. Escribe un cálculo que verifique si resultadoFinal es un número par. Almacene el resultado en una variable llamada
// esPar.
let esPar = resultadoFinal % 2 === 0;
console.log (esPar);

// f. Imprima por consola un mensaje con el siguiente formato: “Mis variables iniciales fueron: [var1], [var2], [var3] y
// [var4]. La respuesta a verificar si el resultado final es par es: [esPar]”
console.log ("Mis variables iniciales fueron: num1, num2, num3 y num4. La respuesta a verificar si el resultado final es par es: %s", esPar);
