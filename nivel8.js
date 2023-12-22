import { restartGame } from "./main.js";
import { startingLevelNine } from "./nivel9.js";

function Leveleight() {
    var opciones = ["1. pastilla azul", "2. Alpastilla azul", "3. pastilla azul"];
    var respuesta = prompt("¿ eres un pájaro azul y tienes que mejorar tus habilidades con una pastilla, qué pastilla usas?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "1") {
        alert("¡FELICIDADES, SIGUE ASÍ!");
        startingLevelNine();
    } else {
        alert("¡Te envenenaste!");
        restartGame();
    }
}

export function startingLevelEight() {
    Leveleight();  
}