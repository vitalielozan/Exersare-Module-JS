import Flota from './flota.mjs';
import { Masina, Motocicleta } from './vehicul.mjs';

const flotaMea = new Flota();

function afiseazaFlota() {
    const parcareAuto = document.querySelector('#parcareAuto');
    parcareAuto.innerHTML = flotaMea.afiseazaFlotaInitiala();

}


const vehiculForm = document.querySelector('#vehiculForm');
vehiculForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const marca = document.querySelector('#marca').value;
    const model = document.querySelector('#model').value;
    const an = parseInt(document.querySelector('#an').value);
    const tip = document.querySelector('#tip').value;
    const extra = document.querySelector('#extra').value;

    let vehicul;
    if (tip === 'masina') {
        vehicul = new Masina(marca, model, an, extra);
    } else {
        vehicul = new Motocicleta(marca, model, an, extra);
    }

    flotaMea.adaugaVehicul(vehicul);
    afiseazaFlota();

    document.querySelector('#vehiculForm').reset();
});

afiseazaFlota();