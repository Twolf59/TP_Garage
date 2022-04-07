import {MoteurThermique} from "../Interfaces/MoteurThermique";

export class MoteurDiesel implements MoteurThermique {

    /**
     * Augmenter la vitesse du moteur
     */
    augmenterTours(): void {
        console.log("Accélèration");
    }

    /**
     * Faire le plein de diesel
     */
    faireLePlein(): void {
        console.log("réservoir rempli");
    }

}
