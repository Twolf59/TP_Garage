export abstract class Personne {

    private _age: number;
    private _nom: string;

    constructor(age: number, nom: string) {
        this._age = age;
        this._nom = nom;
    }

    get age(): number {
        return this._age;
    }

    get nom(): string {
        return this._nom;
    }

    /**
     * Présenter la personne
     */
    public sePresente(){
        console.log("Bonjour, je m'appelle " + this.nom + " et j'ai " + this.age + " ans");
    }

}
