import {Moteur} from "./Moteur";

export interface MoteurThermique extends Moteur {
    faireLePlein(): void;
}
