import { restartGame } from "./main.js";
import { startingLevelTwo } from "./nivel2.js";

function startGame() {
    alert("Angry Birds");
    LevelOne();  
}

function LevelOne() {
    var opciones = ["1. Lanzar pájaro azul", "2. Lanzar pájaro verde", "3. Lanzar pájaro rojo"];
    var respuesta = prompt("¿Cuál es la mejor opción para detener a un cerdo rojo?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "3") {
        alert("¡FELICIDADES, SIGUE ASÍ!");
        startingLevelTwo();
    } else {
        alert("Respuesta incorrecta. Has muerto.");
        restartGame();
    }
}

export function startingLevelOne() {
    startGame();
}