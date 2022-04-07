import {MoteurThermique} from '../Interfaces/MoteurThermique'

export class MoteurEssence implements MoteurThermique {

    /**
     * Augmenter la vitesse du moteur
     */
    augmenterTours(): void {
        console.log("Accélèration");
    }

    /**
     * Faire le plein d'essence
     */
    faireLePlein(): void {
        console.log("Réservoir rempli");
    }

}
