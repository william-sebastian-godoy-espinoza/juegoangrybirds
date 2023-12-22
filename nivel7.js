import { restartGame } from "./main.js";
import { startingLevelEight } from "./nivel8.js";
import { startingLevelNine } from "./nivel9.js";

function Levelseven() {
    var opciones = ["1. ir mas rapido", "2. ir mas lento", "3. quedarte"];
    var respuesta = prompt("¿los enemigos se escapan que vas a hacer?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "1") {
        alert("FELICIDADES, SIGUE ASI.");
        startingLevelEight();
    } else {
        alert("¡Se escaparon!");
        restartGame();
    }
}

export function startingLevelSeven() {
    Levelseven();       
}