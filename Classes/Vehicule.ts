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

    public avancer(){
        console.log("Le Vehicule avance");
    }

    public reculer(){
        console.log("Le Vehicule recule");
    }

    public freiner(){
        console.log("Le Vehicule freine");
    }

    public afficherVehicule(){
        console.log("Le véhicule est de marque " + this.marque);
    }
}
