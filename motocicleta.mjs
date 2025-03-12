import Vehicul from './vehicul.mjs';

export default class Motocicleta extends Vehicul {
    constructor(marca, model, an, cilindri) {
        super(marca, model, an);
        this.cilindri = cilindri;
    }

    descriere() {
        return `🏍️ Motocicletă: ${super.descriere()}, ${this.cilindri}cc`;
    }

    static fromJSON(json) {
        return new Motocicleta(json.marca, json.model, json.an, json.cilindri);
    }
}