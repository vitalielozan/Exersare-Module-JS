import Masina from './masina.mjs';
import Motocicleta from './motocicleta.mjs';
import Vehicul from './vehicul.mjs';

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

  async addDataToJson(vehicul) {
    try {
      const formData = vehicul;
      const response = await fetch(
        'https://my-json-server-five.vercel.app/vehiculs',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log('Date salvate');
      return data;
    } catch (error) {
      console.error('Ereare', error);
    }
  }

  async deleteAllVehicul() {
    try {
      const response = await fetch(
        'https://my-json-server-five.vercel.app/vehiculs'
      );
      const vehiculs = await response.json();

      await Promise.all(vehiculs.map((v) => this.deleteDataFromJson(v.id)));

      alert('Toate vehiculele au fost eliminate din baza de date');
    } catch (error) {
      console.error('Eroare la ștergerea vehiculelor', error);
    }
  }

  async deleteDataFromJson(id) {
    try {
      await fetch(`https://my-json-server-five.vercel.app/vehiculs/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.log('Error', error);
    }
  }

  delFromLocalStorage() {
    localStorage.removeItem('flota');
  }

  fromLocalStorage() {
    const dateSalvate = localStorage.getItem('flota');
    if (dateSalvate) {
      const vehiculeJSON = JSON.parse(dateSalvate);
      return vehiculeJSON.map((v) => {
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
