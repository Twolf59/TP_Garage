import {Vehicule} from "./Vehicule";
import {Moteur} from "../Interfaces/Moteur";

export class Moto extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    public faireUnWheeling(){
        console.log("Wheel");
    }

    afficherVehicule() {
        console.log("La moto est de marque " + this.marque);
    }
}
