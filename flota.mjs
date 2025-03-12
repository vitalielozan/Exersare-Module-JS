import { Masina, Motocicleta } from './vehicul.mjs';

export default class Flota {
    constructor() {
        this.vehicule = this.fromLocalStorage() || [];
        const btnRemove = document.querySelector("#btnRemove");
        btnRemove.addEventListener("click", () => {
            this.delFromLocalStorage();
            // Aici as dori sa resetez afisarea paginii fara sa fac refresh
            this.afiseazaFlotaInitiala();
        });
    }

    adaugaVehicul(vehicul) {
        this.vehicule.push(vehicul);
        this.toLocalStorage();
    }

    afiseazaFlotaInitiala() {
        return this.vehicule.map(v => v.descriere()).join('\n') || "Parcarea este goala...";
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
                if (v.tipCaroserie) {
                    return Masina.fromJSON(v);
                } else if (v.cilindri) {
                    return Motocicleta.fromJSON(v);
                }
            });
        }
        return null;
    }
}