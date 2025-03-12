import Masina from './masina.mjs';
import Motocicleta from './motocicleta.mjs';

export default class Flota {
    constructor() {
        this.vehicule = this.fromLocalStorage() || [];
    }

    adaugaVehicul(vehicul) {
        this.vehicule.push(vehicul);
        this.toLocalStorage();
    }

    toLocalStorage() {
        localStorage.setItem('flota', JSON.stringify(this.vehicule));
    }


    delFromLocalStorage() {
        localStorage.removeItem("flota");
    }

    fromLocalStorage() {
        const dateSalvate = localStorage.getItem('flota');
        if (dateSalvate) {
            const vehiculeJSON = JSON.parse(dateSalvate);
            return vehiculeJSON.map(v => {
                if (v.tipCaroserie !== undefined) {
                    return Masina.fromJSON(v);
                } else if (v.cilindri !== undefined) {
                    return Motocicleta.fromJSON(v);
                } else {
                    return Vehicul.fromJSON(v);
                }
            });
        }
        return [];
    }
}