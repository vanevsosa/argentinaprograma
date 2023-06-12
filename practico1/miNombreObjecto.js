// 2. ¿De qué manera representaría las variables del ejercicio anterior en un objeto, llamémosle persona?
let persona = { nombre: "Vanesa", apellido: "Sosa", edad: 41}

// a. Defina una variable de tipo objeto que lleve el nombre persona, y que contenga las variables nombre, apellido 
// y edad del ejercicio anterior con sus respectivos valores.
persona;

// b. Imprime por consola un mensaje que respete el siguiente formato: “Mi objeto persona es el 
// siguiente: [persona]”
console.log ("Mi objeto persona es el siguiente: " + JSON.stringify (persona));