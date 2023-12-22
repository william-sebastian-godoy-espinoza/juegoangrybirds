import { restartGame } from "./main.js";
import { startingLevelThree } from "./nivel3.js";

function Leveltwo() {
    var opciones = ["1. lanzar a la torre roja", "2. lanzar a la torre verde", "3. lanzar a la torre azul"];
    var respuesta = prompt("han secuentrado un en una torre verde ?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "2") {
        alert("FELICIDADES, SIGUE ASI.");
        startingLevelThree();
    } else {
        alert("Has sido capturado.");
        restartGame();
    }
}
export function startingLevelTwo (){
    Leveltwo();
}