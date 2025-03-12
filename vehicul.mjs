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
