import {Vehicule} from "./Vehicule";
import {Moteur} from "../Interfaces/Moteur";

export class Voiture extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    afficherVehicule() {
        console.log("La voiture est de marque " + this.marque);
    }
}
