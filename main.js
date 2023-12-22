import { startingLevelOne } from "./nivel1.js";

export function restartGame() {
    if (confirm("¿Deseas reiniciar el juego?")) {
        startingLevelOne();
    }
}

startingLevelOne();