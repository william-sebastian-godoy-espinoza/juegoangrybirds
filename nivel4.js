import { restartGame } from "./main.js";
import { startingLevelFive } from "./nivel5.js";

function Levelfour() {
    var opciones = ["1. lanzarte", "2. quedarte", "3. solo ver"];
    var respuesta = prompt("han secuesntrado a tus amigos que vas a hacer? \n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "1") {
        alert("FELICIDADES, SIGUE ASI.");
        startingLevelFive();
    } else {
        alert("Has perdido a tus amigos .");
        restartGame();
    }
}
export function startingLevelFour(){
    Levelfour();
}