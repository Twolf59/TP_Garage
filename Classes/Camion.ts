import {Vehicule} from './Vehicule'
import {Moteur} from "../Interfaces/Moteur";

export class Camion extends Vehicule {

    constructor(marque: string, moteur: Moteur) {
        super(marque, moteur);
    }

    /**
     * Attacher une remorqie au camion
     */
    public attacherRemorqe(){
        console.log("Remorque attachée");
    }

    /**
     * Detacher la remorque du camion
     */
    public detacherRemorque(){
        console.log("Remorque détachée");
    }

    /**
     * Afficher le camion
     */
    afficherVehicule() {
        console.log("Le camion est de marque " + this.marque);
    }

}
