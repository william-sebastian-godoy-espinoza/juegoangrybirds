import { restartGame } from "./main.js";

function Levelten() {
    var opciones = ["1. unirme ", "2. luchar a muerte", "3. escapar solo"];
    var respuesta = prompt("Te ofrecen unirte a los cerdos para salvar a tus amigos que vas a hacer, vas a morir como un cobarde?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "2") {
        alert("¡felicidades, asustaste a los enemigos !.");
    } else {
        alert("quedaste como un cobarde .");
        restartGame();
    }
}
export function startingLevelTen(){
    Levelten();
}