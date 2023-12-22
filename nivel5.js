import { restartGame } from "./main.js";
import { startingLevelSix } from "./nivel6.js";

function Levelfive() {
    var opciones = ["1. sacrificarme", "2. escapar ", "3. pedir ayuda"];
    var respuesta = prompt("te dicen que la vida de tus amigos a cambio de la tuya\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "3") {
        alert("FELICIDADES, SIGUE ASI.");
        startingLevelSix();
    } else {
        alert("perdiste a tus amigos .");
        restartGame();
    }
}
export function startingLevelFive(){
Levelfive
}
