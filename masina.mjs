import Vehicul from './vehicul.mjs';

export default class Masina extends Vehicul {
    constructor(marca, model, an, tipCaroserie) {
        super(marca, model, an);
        this.tipCaroserie = tipCaroserie;
    }

    descriere() {
        return `🚗 Mașină: ${super.descriere()}, caroserie - ${this.tipCaroserie}.`;
    }

    static fromJSON(json) {
        return new Masina(json.marca, json.model, json.an, json.tipCaroserie);
    }
}
