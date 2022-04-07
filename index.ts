import {Garagiste} from "./Classes/Garagiste";
import {Voiture} from "./Classes/Voiture";
import {MoteurEssence} from "./Classes/MoteurEssence";
import {Garage} from "./Classes/Garage";
import {Camion} from "./Classes/Camion";
import {MoteurDiesel} from "./Classes/MoteurDiesel";


let garagiste = new Garagiste(23, "Paul");
let garagiste2 = new Garagiste(40, "Luc");

let voiture = new Voiture("Opel", new MoteurEssence())
let camion = new Camion("Tesla", new MoteurDiesel());

let garage = new Garage([garagiste, garagiste2]);


garagiste.sePresente();
voiture.afficherVehicule();
voiture.avancer();
garage.ajouterVehicule(voiture);
garage.ajouterVehicule(camion);
garage.afficherGarage();
garage.retirerVehicule(camion);
garage.afficherGarage();
