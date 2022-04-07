import {Vehicule} from './Vehicule'
import {Garagiste} from "./Garagiste";
import {Voiture} from "./Voiture";
import {Camion} from "./Camion";
import {Moto} from "./Moto";

export class Garage {

    private _vehiculeList: Vehicule[] = []
    private _garagisteList: Garagiste[] = []

    constructor(vehiculeList: Vehicule[]) {
        this._vehiculeList = vehiculeList;
    }

    get vehiculeList(): Vehicule[] {
        return this._vehiculeList;
    }

    get garagisteList(): Garagiste[] {
        return this._garagisteList;
    }

    public ajouterVehicule(vehicule: Vehicule){
        this.vehiculeList.push(vehicule);
    }

    public retirerVehicule(v: Vehicule){
        this.vehiculeList.slice(this.vehiculeList.indexOf(v), 1);
    }

    public afficherGarage(){
        console.log("Le garage ");
    }

    public afficherMotos(){
        this.vehiculeList.forEach(vehicule => {
            if(vehicule instanceof Moto){
                vehicule.afficherVehicule();
            }
        })
    }

    public afficherVoiture(){
        this.vehiculeList.forEach(vehicule => {
            if(vehicule instanceof Voiture){
               vehicule.afficherVehicule();
            }
        })
    }

    public afficherCamion(){
        this.vehiculeList.forEach(vehicule => {
            if(vehicule instanceof Camion){
                vehicule.afficherVehicule();
            }
        })
    }

}
