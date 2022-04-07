import {Vehicule} from './Vehicule'
import {Moteur} from "../Interfaces/Moteur";

export class Camion extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    public attacherRemorqe(){
        console.log("Remorque attachée");
    }

    public detacherRemorque(){
        console.log("Remorque détachée");
    }

    afficherVehicule() {
        console.log("Le camion est de marque " + this.marque);
    }

}
