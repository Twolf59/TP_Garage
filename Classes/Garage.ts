import {Vehicule} from './Vehicule'
import {Garagiste} from "./Garagiste";
import {Voiture} from "./Voiture";
import {Camion} from "./Camion";
import {Moto} from "./Moto";

export class Garage {

    private _vehiculeList: Vehicule[] = []
    private _garagisteList: Garagiste[] = []

    constructor(garagisteList: Garagiste[]) {
        this._garagisteList = garagisteList;
    }

    get vehiculeList(): Vehicule[] {
        return this._vehiculeList;
    }

    get garagisteList(): Garagiste[] {
        return this._garagisteList;
    }

    /**
     * Ajouter un véhicule au garage
     * @param vehicule
     */
    public ajouterVehicule(vehicule: Vehicule){
        this.vehiculeList.push(vehicule);
    }

    /**
     * Retirer un véhicule du garage
     * @param v
     */
    public retirerVehicule(v: Vehicule){
        this.vehiculeList.splice(this.vehiculeList.indexOf(v), 1);
    }

    /**
     * Afficher le garage
     */
    public afficherGarage(){
        this._garagisteList.map(garagiste =>{
            garagiste.sePresente();
        })

        this.vehiculeList.map(vehicule =>{
            vehicule.afficherVehicule();
        })
    }

    /**
     * Afficher les motos du garage
     */
    public afficherMotos(){
        this.vehiculeList.forEach(vehicule => {
            if(vehicule instanceof Moto){
                vehicule.afficherVehicule();
            }
        })
    }

    /**
     * Afficher les voitures du garage
     */
    public afficherVoiture(){
        this.vehiculeList.forEach(vehicule => {
            if(vehicule instanceof Voiture){
               vehicule.afficherVehicule();
            }
        })
    }

    /**
     * Afficher les camions du garage
     */
    public afficherCamion(){
        this.vehiculeList.forEach(vehicule => {
            if(vehicule instanceof Camion){
                vehicule.afficherVehicule();
            }
        })
    }

}
