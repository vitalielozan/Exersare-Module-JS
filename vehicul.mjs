export default class Vehicul {
    constructor(marca, model, an) {
        this.marca = marca;
        this.model = model;
        this.an = an;
    }

    descriere() {
        return `${this.marca} ${this.model}, fabricat în ${this.an}`;
    }

    static fromJSON(json) {
        return new Vehicul(json.marca, json.model, json.an);
    }
}

export class Masina extends Vehicul {
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

export class Motocicleta extends Vehicul {
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
