import {Vehicule} from "./Vehicule";
import {Moteur} from "../Interfaces/Moteur";

export class Moto extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    /**
     * Faire un wheeling de la moto
     */
    public faireUnWheeling(){
        console.log("Wheel");
    }

    /**
     * Afficher la moto
     */
    afficherVehicule() {
        console.log("La moto est de marque " + this.marque);
    }
}
