import { restartGame } from "./main.js";
import { startingLevelTen } from "./nivel10.js";

function Levelnine() {
    var opciones = ["1. arriesgarte", "2. quedarte", "3. pedir ayuda"];
    var respuesta = prompt("¡secuestraron a tus amigos y no sabes su estan en la torre de los cerdos o en la pricions, si te arriesgas puede que los salves pero, que vas a hacer ?\n\n" + opciones.join("\n"));
    respuesta = respuesta.toLowerCase();
    
    if (respuesta === "2") {
        alert("¡Respuesta correcta! Has superado el nivel 9.");
        startingLevelTen();
    } else {
        alert("murieron todos.");
       restartGame();
    }
}
export function startingLevelNine(){
   Levelnine();
}
