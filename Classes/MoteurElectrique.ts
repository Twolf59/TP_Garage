import {Moteur} from "../Interfaces/Moteur";

export class MoteurElectrique implements Moteur {

    /**
     * Recherger la batterie du moteur
     */
    recharger(): void {
        console.log("batterie rechargée");
    }

    /**
     * Augmenter la vitesse du moteur
     */
    augmenterTours(): void {
        console.log("Accélèration");
    }
}
