import { restartGame } from "./main.js";
import { startingLevelSeven } from "./nivel7.js";

function Levelsix() {
    var opciones = ["3", "1", "20"];
    var respuesta = prompt("hay 3 torres por derribar cuantos pajaros vas a lanzar\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "3") {
        alert("FELICIDADES, SIGUE ASI.");
        startingLevelSeven();
    } else {
        alert("No derribaste la torre .");
        restartGame();
    }
}

export function startingLevelSix() {
    Levelsix(); 
}