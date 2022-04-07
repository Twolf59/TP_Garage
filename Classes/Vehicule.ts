import {Moteur} from "../Interfaces/Moteur";

export abstract class Vehicule {

    private _marque: string;
    private _moteur: Moteur;

    constructor(marque: string, moteur: Moteur) {
        this._marque = marque;
        this._moteur = moteur;
    }

    get marque(): string {
        return this._marque;
    }

    get moteur(): Moteur {
        return this._moteur;
    }

    /**
     * Faire avancer le véhicule
     */
    public avancer(){
        console.log("Le Vehicule avance");
    }

    /**
     * Faire reculer le véhicule
     */
    public reculer(){
        console.log("Le Vehicule recule");
    }

    /**
     * Faire freiner le véhicule
     */
    public freiner(){
        console.log("Le Vehicule freine");
    }

    /**
     * Afficher le véhicule
     */
    public afficherVehicule(){
        console.log("Le véhicule est de marque " + this.marque);
    }
}
