import Flota from './flota.mjs';
import Masina from './masina.mjs';
import Motocicleta from './motocicleta.mjs';

const flotaMea = new Flota();

function afiseazaFlota() {
    const parcareAuto = document.querySelector('#parcareAuto');
    parcareAuto.innerHTML = "";

    if (flotaMea.vehicule.length === 0) {
        parcareAuto.innerHTML = "<p>Parcarea este goala...</p>";
        return;
    }
    flotaMea.vehicule.forEach(vehicul => {
        const vechiculElement = document.createElement("p");
        vechiculElement.textContent = vehicul.descriere();
        parcareAuto.appendChild(vechiculElement);
    });
}

const btnRemove = document.querySelector("#btnRemove");
btnRemove.addEventListener("click", () => {
    flotaMea.delFromLocalStorage();
    flotaMea.vehicule = [];
    flotaMea.toLocalStorage();
    afiseazaFlota();
});

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
        if (isNaN(extra)) {
            vehicul = new Masina(marca, model, an, extra);
        } else {
            alert('Valoarea introdusă pentru caroserie nu este validă. Introduceți date corecte!');
        }
    } else if (tip === 'motocicleta') {
        if (!isNaN(extra)) {
            vehicul = new Motocicleta(marca, model, an, extra);
        } else {
            alert('Valoarea introdusă pentru cilindri nu este validă. Introduceți date corecte!');
        }
    } else {
        alert('Tipul de vehicul nu este recunoscut.');
    }

    flotaMea.adaugaVehicul(vehicul);
    afiseazaFlota();
    document.querySelector('#vehiculForm').reset();
});

afiseazaFlota();