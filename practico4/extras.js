// EXTRA 1: Definir constantes para las distintas jugadas, es decir, piedra, papel y tijera y adaptar el código para
// su correcta utilización.

const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";

function obtenerJugadaComputadora() {
    let computadora = [piedra, papel, tijeras];
    let resultado = computadora[Math.floor(Math.random()*3)];
    return resultado;
}

const readlineSync = require('readline-sync');

function obtenerJugadaUsuario() {
    let usuario = readlineSync.question('Ingrese su eleccion entre piedra, papel o tijeras: ');
    while (usuario !== "piedra" && usuario !== "papel" && usuario!== "tijeras") {
    usuario = readlineSync.question('Ingrese su eleccion entre piedra, papel o tijeras: ');
    }
    return usuario;
}

function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if ((jugadaUsuario === "piedra" && jugadaComputadora === "tijeras") || 
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra") || 
    (jugadaUsuario === "tijeras" && jugadaComputadora === "papel")) {
        let ganador = "Gana el usuario";
        return ganador;
    } else if ((jugadaUsuario === "tijeras" && jugadaComputadora === "piedra") || 
    (jugadaUsuario === "piedra" && jugadaComputadora === "papel") || 
    (jugadaUsuario === "papel" && jugadaComputadora === "tijeras")) {
        let ganador = "Gana la computadora";
        return ganador;
    } else {
        let ganador = "Empate";
        return ganador;
    }
}

// EXTRA 2: Agregar la posibilidad de que el usuario elija en cuantos jugadas quiere terminar el juego, es decir:
// ● Una jugada: gana el ganador de esa única jugada.
// ● Dos jugadas: gana quien gana ambas jugadas, o puede haber un empate en caso de que el usuario gane una jugada 
// y la computadora la otra.
// ● Mejor de 3: quien gane 3 o 2 jugadas será el ganador, etc.

function obtenerCantidadJugadas() {
    let jugadas = parseFloat(readlineSync.question('Ingrese cantidad de jugadas: '));
    while (!Number.isInteger(jugadas) || jugadas <= 0) {
        jugadas = parseFloat(readlineSync.question('Ingrese cantidad de jugadas: '));
    }
    return jugadas;
}

let cantidadJugadas = obtenerCantidadJugadas();
let victoriasComputadora = 0;
let victoriasUsuario = 0;

for (let i = 1; i <= cantidadJugadas; i++) {
    console.log("Jugada %s:", i);
    
    let jugadaComputadora = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let resultado = determinarGanador(jugadaUsuario, jugadaComputadora);
 
    console.log("La computadora eligió: %s", jugadaComputadora);
    console.log("El usuario eligió: %s", jugadaUsuario);
    console.log("El resultado fue: %s", resultado);

if (resultado === "Gana la computadora") {
        victoriasComputadora++;
    } else if (resultado === "Gana el usuario") {
        victoriasUsuario++;
    }
}

console.log("Cantidad de victorias de la computadora:", victoriasComputadora);
console.log("Cantidad de victorias del usuario:", victoriasUsuario);

function ganadorFinal() {
    if (victoriasComputadora > victoriasUsuario) {
        console.log("El resultado de las %s rondas: Gana computadora", cantidadJugadas);
    } else if (victoriasComputadora < victoriasUsuario) {
        console.log("El resultado de las %s rondas: Gana usuario", cantidadJugadas);
    } else if (victoriasComputadora = victoriasUsuario) {
        console.log("El resultado de las %s rondas: Empate", cantidadJugadas);
    }
}

ganadorFinal();