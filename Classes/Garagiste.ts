import {Personne} from "./Personne";
import {Garage} from "./Garage";

export class Garagiste extends Personne {

    /**
     * Faire conduire le garagiste
     */
    public conduire(){
        console.log("Conduit");
    }

    /**
     * Présenter le garage du garagiste
     * @param garage
     */
    public presenterGarage(garage: Garage){
        garage.afficherGarage();
    }

}
