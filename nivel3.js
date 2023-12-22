import { restartGame } from "./main.js";
import { startingLevelFour } from "./nivel4.js";

function Levelthree() {
    var opciones = ["1. azul", "2. verde", "3. amarillo"];
    var respuesta = prompt("que color de pajaro se forma se uno a un pajaro amarillo y aun pajaro azul?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "2") {
        alert("FELICIDADES, SIGUE ASI.");
        startingLevelFour();
    } else {
        alert("Inténtalo de nuevo.");
        restartGame();
    }
}
export function startingLevelThree (){
    Levelthree();
}